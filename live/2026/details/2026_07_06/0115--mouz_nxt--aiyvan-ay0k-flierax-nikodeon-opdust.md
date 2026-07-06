### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: AiyvaN, ay0k, Flierax, Nikodeon, opdust<br />
Global Rank: [115](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [77]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  922.1<br />
<br />
Final Rank Value (922.1) = Starting Rank Value (891.4) + Head To Head Adjustments (30.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.189[<sup>2</sup>](#table1)
- LAN Wins: 0.180[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 891.4
- 400 + ( ( 0.261 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 891.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           81 |     1266 | 2026-05-14 | TDK             | L   | 0.845      | -            | -                | -                | -         |    -5.98 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           80 |     1319 | 2026-05-12 | Lavked          | L   | 0.835      | -            | -                | -                | -         |    -9.97 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           79 |     1376 | 2026-05-11 | INOX Division   | L   | 0.826      | -            | -                | -                | -         |    -9.14 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           78 |     1418 | 2026-05-10 | Echo            | L   | 0.818      | -            | -                | -                | -         |    -4.72 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           77 |     1429 | 2026-05-09 | UNiTY           | W   | 0.814      | 0.384        | -                | 0.452 (0.141)    | 0 (0.000) |     8.54 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           76 |     1467 | 2026-05-08 | AM              | W   | 0.806      | 0.435        | 0.014 (0.005)    | 0.670 (0.235)    | 0 (0.000) |    19.56 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           75 |     1479 | 2026-05-07 | Lavked          | L   | 0.800      | -            | -                | -                | -         |    -9.91 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           74 |     1521 | 2026-05-05 | Bebop           | W   | 0.785      | 0.384        | -                | 0.704 (0.212)    | 0 (0.000) |    10.85 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           73 |     1531 | 2026-05-04 | Ursa            | L   | 0.780      | -            | -                | -                | -         |    -8.79 | ay0k, Flierax, lmbt, Nikodeon, opdust   |
|           72 |     1826 | 2026-04-27 | UNiTY           | L   | 0.734      | -            | -                | -                | -         |   -15.55 | ay0k, Flierax, lmbt, Nikodeon, opdust   |
|           71 |     2054 | 2026-04-23 | ECSTATIC        | W   | 0.707      | 0.363        | 0.025 (0.006)    | -                | 0 (0.000) |    12.19 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           70 |     2090 | 2026-04-22 | Acend           | L   | 0.700      | -            | -                | -                | -         |    -2.48 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           69 |     2120 | 2026-04-20 | CYBERSHOKE      | L   | 0.686      | -            | -                | -                | -         |    -6.82 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           68 |     2130 | 2026-04-19 | EYEBALLERS      | L   | 0.681      | -            | -                | -                | -         |    -3.57 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           67 |     2148 | 2026-04-19 | Ursa            | W   | 0.678      | 0.435        | -                | 0.903 (0.266)    | -         |    11.80 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           66 |     2180 | 2026-04-17 | ex-RUBY         | L   | 0.667      | -            | -                | -                | -         |    -8.66 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           65 |     2218 | 2026-04-14 | Qual4           | W   | 0.648      | -            | -                | -                | -         |     0.91 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           64 |     2230 | 2026-04-14 | GenOne          | W   | 0.645      | 0.435        | -                | 1.000 (0.280)    | -         |     6.72 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           63 |     2241 | 2026-04-13 | Clutchain       | L   | 0.641      | -            | -                | -                | -         |   -18.45 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           62 |     2269 | 2026-04-12 | ARCRED          | L   | 0.632      | -            | -                | -                | -         |    -6.09 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           61 |     2371 | 2026-04-08 | Mai Tai         | W   | 0.606      | -            | -                | -                | -         |     6.38 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           60 |     3056 | 2026-03-29 | aimclub         | L   | 0.541      | -            | -                | -                | -         |   -11.21 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           59 |     3084 | 2026-03-29 | Lazer Cats      | L   | 0.539      | -            | -                | -                | -         |   -12.47 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           58 |     3104 | 2026-03-29 | ADN             | W   | 0.538      | -            | -                | -                | 1 (0.538) |     0.64 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           57 |     3302 | 2026-03-25 | BIG             | L   | 0.514      | -            | -                | -                | -         |    -1.69 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           56 |     3363 | 2026-03-24 | fnatic          | W   | 0.506      | 0.435        | -                | 0.644 (0.142)    | 1 (0.506) |    10.84 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           55 |     3384 | 2026-03-24 | Nexus           | W   | 0.505      | -            | -                | -                | 1 (0.505) |     2.87 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           54 |     3887 | 2026-03-14 | Nemiga          | L   | 0.438      | -            | -                | -                | -         |    -3.74 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           53 |     3968 | 2026-03-12 | megoshort       | W   | 0.427      | -            | -                | -                | -         |     3.50 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           52 |     3986 | 2026-03-12 | CYBERSHOKE      | L   | 0.426      | -            | -                | -                | -         |    -4.37 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           51 |     4022 | 2026-03-11 | K27             | L   | 0.419      | -            | -                | -                | -         |    -2.34 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           50 |     4063 | 2026-03-10 | Nuclear TigeRES | W   | 0.413      | 0.435        | 0.078 (0.014)    | 0.799 (0.144)    | -         |    10.41 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           49 |     4119 | 2026-03-09 | Nemesis         | W   | 0.406      | 0.371        | 0.138 (0.021)    | -                | -         |     9.53 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           48 |     4153 | 2026-03-08 | Acend           | W   | 0.402      | 0.435        | 0.070 (0.012)    | 0.908 (0.158)    | -         |    11.55 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           47 |     4194 | 2026-03-08 | GenOne          | W   | 0.400      | 0.371        | -                | 1.000 (0.148)    | -         |     4.82 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           46 |     4271 | 2026-03-06 | ex-RUBY         | L   | 0.388      | -            | -                | -                | -         |    -6.05 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           45 |     4296 | 2026-03-06 | UNiTY           | W   | 0.385      | -            | -                | -                | -         |     3.64 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           44 |     4400 | 2026-03-04 | PsychoFace      | W   | 0.372      | 0.435        | 0.028 (0.005)    | 1.000 (0.162)    | -         |     6.69 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           43 |     4510 | 2026-03-01 | Oxuji           | W   | 0.354      | -            | -                | -                | -         |     8.93 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           42 |     4573 | 2026-02-28 | SPARTA          | L   | 0.346      | -            | -                | -                | -         |    -3.05 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           41 |     4625 | 2026-02-27 | Echo            | L   | 0.339      | -            | -                | -                | -         |    -1.30 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           40 |     4650 | 2026-02-26 | los kogutos     | L   | 0.335      | -            | -                | -                | -         |    -5.23 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           39 |     4662 | 2026-02-26 | K27             | L   | 0.334      | -            | -                | -                | -         |    -1.61 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           38 |     4681 | 2026-02-26 | EYEBALLERS      | L   | 0.333      | -            | -                | -                | -         |    -1.79 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           37 |     4696 | 2026-02-26 | Hashiras        | W   | 0.332      | -            | -                | -                | -         |     2.75 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           36 |     4728 | 2026-02-25 | Nuclear TigeRES | W   | 0.327      | 0.435        | 0.078 (0.011)    | -                | -         |     8.68 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           35 |     4801 | 2026-02-23 | DUNDU           | W   | 0.315      | -            | -                | -                | -         |     0.48 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           34 |     4807 | 2026-02-23 | Alliance        | L   | 0.315      | -            | -                | -                | -         |    -0.59 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           33 |     4847 | 2026-02-22 | TDK             | L   | 0.308      | -            | -                | -                | -         |    -2.33 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           32 |     4879 | 2026-02-22 | SPARTA          | L   | 0.307      | -            | -                | -                | -         |    -8.82 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           31 |     4946 | 2026-02-21 | TDK             | L   | 0.300      | -            | -                | -                | -         |    -2.42 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           30 |     4973 | 2026-02-20 | Leo             | W   | 0.295      | -            | -                | -                | -         |     2.43 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           29 |     4984 | 2026-02-20 | los kogutos     | W   | 0.294      | -            | -                | -                | -         |     4.78 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           28 |     5057 | 2026-02-19 | ECSTATIC        | L   | 0.285      | -            | -                | -                | -         |    -4.04 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           27 |     5079 | 2026-02-18 | Johnny Speeds   | W   | 0.281      | 0.384        | 0.048 (0.005)    | -                | -         |     7.10 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           26 |     5098 | 2026-02-18 | TDK             | W   | 0.280      | 0.435        | 0.057 (0.007)    | -                | -         |     6.71 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           25 |     5104 | 2026-02-18 | FAVBET          | W   | 0.279      | -            | -                | -                | -         |     3.25 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           24 |     5129 | 2026-02-17 | Oxuji           | W   | 0.276      | -            | -                | -                | -         |     7.07 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           23 |     5141 | 2026-02-17 | magic           | W   | 0.275      | 0.624        | 0.219 (0.038)    | -                | -         |     8.27 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           22 |     5185 | 2026-02-16 | Omega           | W   | 0.268      | -            | -                | -                | -         |     6.52 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           21 |     5210 | 2026-02-16 | BRUTE           | W   | 0.266      | -            | -                | -                | -         |     2.90 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           20 |     5299 | 2026-02-14 | ENCE            | W   | 0.254      | -            | -                | -                | -         |     2.52 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           19 |     5537 | 2026-02-08 | Nuclear TigeRES | L   | 0.214      | -            | -                | -                | -         |    -0.82 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           18 |     5549 | 2026-02-08 | Virtus.pro      | W   | 0.214      | -            | -                | -                | -         |     5.80 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           17 |     5722 | 2026-02-02 | 9INE            | L   | 0.173      | -            | -                | -                | -         |    -3.67 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           16 |     5803 | 2026-01-31 | ARCRED          | W   | 0.158      | -            | -                | -                | -         |     3.94 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           15 |     5822 | 2026-01-30 | Eternal Fire    | W   | 0.154      | -            | -                | -                | -         |     0.59 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           14 |     5876 | 2026-01-28 | FAVBET          | L   | 0.140      | -            | -                | -                | -         |    -2.74 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           13 |     5894 | 2026-01-27 | FAVBET          | L   | 0.134      | -            | -                | -                | -         |    -2.65 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           12 |     5929 | 2026-01-25 | UNiTY           | L   | 0.121      | -            | -                | -                | -         |    -2.62 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           11 |     5941 | 2026-01-25 | ex-MANA         | W   | 0.120      | -            | -                | -                | -         |     1.34 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           10 |     5980 | 2026-01-24 | magic           | L   | 0.113      | -            | -                | -                | -         |    -0.14 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            9 |     6013 | 2026-01-23 | illwill         | L   | 0.107      | -            | -                | -                | -         |    -1.65 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            8 |     6036 | 2026-01-23 | AaB             | W   | 0.106      | -            | -                | -                | -         |     0.39 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            7 |     6079 | 2026-01-22 | ALLINNERS       | W   | 0.099      | -            | -                | -                | -         |     0.54 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            6 |     6124 | 2026-01-21 | los kogutos     | L   | 0.093      | -            | -                | -                | -         |    -1.35 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            5 |     6139 | 2026-01-20 | BASEMENT BOYS   | W   | 0.086      | -            | -                | -                | -         |     2.27 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            4 |     6180 | 2026-01-18 | Betclic         | L   | 0.073      | -            | -                | -                | -         |    -0.31 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            3 |     6238 | 2026-01-17 | Famalicão       | W   | 0.066      | -            | -                | -                | 1 (0.066) |     0.55 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            2 |     6330 | 2026-01-15 | Fuzos           | W   | 0.053      | -            | -                | -                | 1 (0.053) |     0.38 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            1 |     6336 | 2026-01-15 | MTX             | W   | 0.052      | -            | -                | -                | 1 (0.052) |     0.27 | ay0k, Joey, Nikodeon, opdust, xelex     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,293.23)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.448 | $500.00        | $224.04         |
| 2026-03-13 |      0.435 | $2,000.00      | $869.25         |
| 2026-03-11 |      0.419 | $5,000.00      | $2,096.70       |
| 2026-02-27 |      0.341 | $2,000.00      | $682.71         |
| 2026-02-24 |      0.322 | $2,250.00      | $723.40         |
| 2026-02-20 |      0.294 | $2,000.00      | $588.69         |
| 2026-01-18 |      0.075 | $1,454.00      | $108.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
