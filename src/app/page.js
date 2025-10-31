// bundler will remove imports

import MyNavBar from "@/components/ui/navBar";
import MyHero from "@/components/ui/hero";

export default function Home() {
  return (
    <div className=" max-w-[60vw] flex-col min-h-screen items-center ml-auto mr-auto bg-zinc-50 font-sans dark:bg-black">
      <MyNavBar></MyNavBar>
      <MyHero></MyHero>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc nisl, mattis in neque non, hendrerit pellentesque diam. Curabitur sed dictum mauris. Donec dui lectus, luctus vitae semper non, sodales ac nibh. Donec eu luctus velit, eget mattis massa. Mauris lectus augue, cursus nec elit ac, blandit auctor velit. Duis laoreet nisi vel risus elementum, ac facilisis libero elementum. Ut fermentum, lacus eu egestas consequat, felis arcu vestibulum elit, nec dapibus risus sapien viverra dui. Mauris sed diam velit. Morbi facilisis sapien at sem dignissim pulvinar. Proin id arcu molestie, aliquam arcu a, tincidunt ante.

      Nullam justo risus, molestie sed diam in, malesuada fringilla leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut condimentum risus nibh, eu vulputate mauris semper eu. Aliquam tempus dignissim ipsum in egestas. Cras viverra quam at enim porttitor egestas. Donec tempus nisl mauris, at mattis turpis convallis vel. Aliquam eu erat sed orci maximus fermentum. Ut nec efficitur urna. In tristique consectetur ligula quis lobortis. Nam auctor suscipit pretium.

      Proin finibus, mauris vel tempus faucibus, augue lectus accumsan tellus, vel tempor augue purus ut magna. Mauris egestas sit amet nisl vitae vehicula. Aliquam cursus justo arcu, sit amet pellentesque erat malesuada non. Etiam erat nibh, viverra sit amet venenatis nec, tempor non urna. Cras gravida dolor quis augue suscipit, eget varius tortor gravida. Pellentesque porttitor efficitur magna vel finibus. Nam malesuada orci non sapien imperdiet pulvinar.

      Proin tempor scelerisque dolor sed rhoncus. Nulla facilisi. Sed dictum dignissim nibh eget interdum. Phasellus in est lorem. In vitae quam varius, volutpat ipsum eu, ornare nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis placerat velit velit, sit amet scelerisque tortor tincidunt eu. Donec quis neque sit amet est maximus egestas.

      Curabitur a nibh tortor. Nulla dui eros, semper sit amet lacus in, sodales ultrices ex. Quisque tempus nibh sed mauris tristique, eget pharetra orci tempor. Maecenas lacinia leo ut convallis maximus. Donec at malesuada urna, vel eleifend ipsum. Nunc nec magna justo. Vestibulum blandit tempus tortor a scelerisque. Suspendisse blandit vulputate velit, sed fringilla ligula semper ac. 
      </div>
    </div>
  );
}
