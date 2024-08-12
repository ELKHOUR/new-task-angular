import { Component, Input, input } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SCardComponent } from './s-card/s-card.component';
import { ICities } from './home.component.models';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, SCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly cities: Array<ICities> = [
    {
      id:1,
      city_name:"Москва",
      description:"Столица России, город федерального значения",
      favorite:false,
      imageUrl:"https://s3-alpha-sig.figma.com/img/96fb/02e0/cfeac87dfcdbaad1df86da05f80461c2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifeK6D7BJW5qeSbiL999p9j5KlQiTVByW9s93185hJy3h1CT7kMLNxMoXRc3Eu1N71o9sKpstCTrr70UrfKRRUj~7VzdF~STL3flGBR5FHj6EyjY167xHUoH9V2iXcD0jjg9o-urWjyganQoOcU2nMqDri-YpuKnb7-yCERRsKdjt850Bs7wk3jtVbVNpH-yOaR~QIEkIzYxSzp3LELHsqXDTO0p0QS8PgX0O2HcA2k6k47HBZJdOSc5xxT9sNCzpOi0db2KRglZQmhOJrTeVMrEPbDBRz3OHj4IBChoC9enRjkMgfQCS80oc~5kKb97LYETMFYAy3EkmixI7oXH6g__"
   },
    {
      id:2,
      city_name:"Санкт-Петербург",
      description:"Второй по численности населения город России",
      favorite:false,
      imageUrl:"https://s3-alpha-sig.figma.com/img/948a/b6af/1b24c9efbb89c0e68b561463b593c24e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BhrqDwldzd2Uz5TcJ~ZvTb8HWahRop08qAK3poCF~A4XbwxRKOglOvd1eF2dwSZwwDyFVX4dWiutfd6xFFJtlw1O0k0XCScsUVs-qRFkHSHO8KvHq3-zhEdlM-oukBx~J5ky9frSIedC~RQGXXcu8gQMUrn~mRt37SrOoVxAIhIvSuxM5JrSq3TDG0lANdIcX8mo5tsVGD6mN7ce6zFuz2ji2oGGjFA48Dp8PYse4B8dJPFb-Fy3R4J7LnfD0O1s6HsSNx0YPmW7s4BJrICxyNFUCK1gEyop5tXl6NrDqzoP5pazsYPzegnpf8CLlTQcm4K6qirBy6PzgPEZ0e~~Iw__"
   },
    {
      id:3,
      city_name:"Новосибирск",
      description:"Третий по численности населения город России",
      favorite:false,
      imageUrl:"https://s3-alpha-sig.figma.com/img/62f4/30d7/6b739cd697a1d67b56f99bcc10af0dd9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bPIz1QmJywNFK4cF4YF3IrggGF4rdQvMBnahlsopTZalgZkmgk4gE24JsRQgSfWKxg9hu9P~Meth7wn5VwIkjFgaViV07ORtT~RwDX9VEL-8kSaT91zK~FGGoNpW0TtZqpbfMOvw8kOWj60WCk59mKLvVv5er5eJcHUIFORAwI01vIZGhXQw63UJ81Efjf-uOD3jIp1gocEY~J8HwlcHLKHz-EjWUmrATNrdi~DxPLaJ0Clerb76oBqBhaT9NFNe44SJ1UnzZdCNROy9iNQCB8NUYyG-ToK5aiIstiVx~hL4lb9yvMcRneOV0ykySE9jSOT0kHMfkICrFHo5m9CpuA__"
   },
    {
      id:4,
      city_name:"Екатеринбург",
      description:"Город-миллионник в России. Тоже красивый город",
      favorite:false,
      imageUrl:"https://s3-alpha-sig.figma.com/img/df9d/5e44/25963d600a9d9393a41a08dfec1e144f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0qBKHzpXd2IYmjq4TM9SklPkT8WLdA-epjNJJItf4nr2NfGA8f4vVr6~87vfyiHYlnKyHNj9eqo1oLJpigU0MPjD83ziRAp-7GazNnbYRILct25y-Bx-WfIRj1jsWsps2H5O8f58VyMux5cgY35ZjTWBJdjLBrgFzA6LKiNdLt4zx1snMJwM~zSPu7Fsgj~HgZn5l-96SL2Mc3IT7b8xfjPDaCcevZvCAg0ZPwTKC132DDICLxJwD8X51og6tUvr68Mfqv6Gfxm4Keiyqj7e6GZmR8MmZFWBs~jhMJQ~VHJ2kLbiquwZADIR7jxDegSz4HAjAzFVHtCBkeOUz8MRA__"
   },
    {
      id:5,
      city_name:"Нижний Новгород",
      description:"Город в центральной России. Красивый город.",
      favorite:false,
      imageUrl:"https://s3-alpha-sig.figma.com/img/f320/8d4c/35e7807201a3b66e6bb2d4c09fdf558c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YXkiDicksr80w8YJ2ABbRucv5PVF6NPgCZ-WfuW-FxHBCricTNzrxnW0W8xx9Bv1amK6NE~Dq~KavfGnLAB2nPfa4EFKtPEToy2f2HyAR0Fyq05IjVE~LZdi9eYWfM8qGAweGZ0QOd5mp-mbCJkaEmUQhcuR-~inJpBT-clk204vF29qtnr9Igg4D62NID-sKEYBl8QaqbuT~UhAhN6ua8Wup~KimgjEh8w~BZvgB4PSQuDyKqjWCPX~oQuoSNkPQYqYZArOcTK6SRjUKK~8yLg2QKeweFyxnXj8rSR1sGL0L4-82~uHbqhDJ4pzbith-f~Ppmx1ldPuptHLxbbvqA__"
   },
    {
      id:6,
      city_name:"Челябинск",
      description:"Город в Российской Федерации, седьмой по количеству жителей",
      favorite:false,
      imageUrl:"https://s3-alpha-sig.figma.com/img/e388/fd59/72c4524921869056be00c476f919a3aa?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VsQxa~Ke6W-y8--woGAWu5rvWvDPLZe5jOSZ08KRsOXXbb26n6jD2CCToUho7nEGcj8fSPl7~1OLuEVNUQQ7Dt~5WxiKTmtch0jeC-R3d2tvqMsNIwdwqhsad1wrzDJi346mCdoPax9fFF~LX3HAs63tlxCw6kAJtXmVcRlo-2UESETqbkYWpsTaSJz1znuqIT0kZ~5u-waslCAwqsoOZJY2HyrRY-oFVyEpv1tlZ8I5Fv3LU5f5k4EpZSAjhAluKqNWFV8kmipNxSbALWbrqPOTqmf6fHI2x6G8Dx4xxZdC1PX8J7UfWIi2ibODra1EOm5PUx0lenIIxoNzMp815w__"
   },
    {
      id:7,
      city_name:"Казань",
      description:"Город в России, столица Республики Татарстан.",
      favorite:false,
      imageUrl:"https://s3-alpha-sig.figma.com/img/bf12/2c35/036ae0717c9d737eb786f1ada786bc19?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dToQ5ElnQ2GaS2jArhNJ5bWp4RSdDbfC2m0fwNKaxwXqSUBVIDHzgT~tVkKySdf0zq5OU-KpuZT7W4qVueEFN171QmOhpBEmYIK-0lnpxdbZ4BwnxuttsPnZMkPRl8m1Gj2-1q0B4leU0M5tZnLcq~eo9wjh08jaMCW1aLTSmTIztf~HnH~Su10XjqdEzTMbREBEF0tkB20JVmFZRbiXZVCa5SFK5Hq4b3nnYEC~qxLBcImyQt6SuEgXnmlU2XDMJ4n8COtilMh~KdYz6qgrICPo0QvA9BJdST07kjP~x3Dw6wUf-AnDXjfmOaCkei8s~X0IdTKDlTL22t86kM66Cw__"
   },
  ]

}
