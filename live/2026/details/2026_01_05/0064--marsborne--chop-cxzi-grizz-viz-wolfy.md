### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, viz, WolfY<br />
Global Rank: [64](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [13]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  1132.0<br />
<br />
Final Rank Value (1132.0) = Starting Rank Value (1192.1) + Head To Head Adjustments (-60.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.411[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.134[<sup>2</sup>](#table1)
- LAN Wins: 0.695[<sup>2</sup>](#table1)

The average of these factors is 0.399<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1192.1
- 400 + ( ( 0.399 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1192.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           76 |       16 | 2026-01-04 | M80               | L   | 1.000      | -            | -                | -                | -         |    -3.61 | chop, Cxzi, Grizz, motm, WolfY   |
|           75 |       57 | 2026-01-03 | Reign Above       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.23 | chop, Cxzi, Grizz, motm, WolfY   |
|           74 |       61 | 2026-01-03 | NRG               | L   | 1.000      | -            | -                | -                | -         |    -4.47 | chop, Cxzi, Grizz, motm, WolfY   |
|           73 |       70 | 2026-01-03 | Reign Above       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.16 | chop, Cxzi, Grizz, motm, WolfY   |
|           72 |      835 | 2025-11-16 | Voca              | L   | 0.868      | -            | -                | -                | -         |   -19.50 | chop, Cxzi, Grizz, viz, WolfY    |
|           71 |      851 | 2025-11-15 | SkinRave          | L   | 0.863      | -            | -                | -                | -         |   -18.63 | chop, Cxzi, Grizz, viz, WolfY    |
|           70 |      853 | 2025-11-15 | Zomblers          | W   | 0.862      | -            | -                | -                | -         |     1.63 | chop, Cxzi, Grizz, viz, WolfY    |
|           69 |      875 | 2025-11-14 | Voca              | W   | 0.856      | 0.363        | 0.042 (0.013)    | 0.620 (0.193)    | -         |     6.84 | chop, Cxzi, Grizz, viz, WolfY    |
|           68 |      928 | 2025-11-12 | BOSS              | W   | 0.843      | 0.363        | 0.015 (0.005)    | 0.470 (0.144)    | -         |     3.40 | chop, Cxzi, Grizz, viz, WolfY    |
|           67 |      963 | 2025-11-11 | Mythic            | W   | 0.837      | -            | -                | -                | -         |     2.00 | chop, Cxzi, Grizz, viz, WolfY    |
|           66 |      989 | 2025-11-10 | Voca              | L   | 0.830      | -            | -                | -                | -         |   -19.49 | chop, Cxzi, Grizz, viz, WolfY    |
|           65 |     1017 | 2025-11-09 | SAW               | W   | 0.822      | 0.333        | 0.315 (0.086)    | 0.657 (0.180)    | 1 (0.822) |    23.67 | chop, Cxzi, Grizz, viz, WolfY    |
|           64 |     1023 | 2025-11-09 | M80               | L   | 0.820      | -            | -                | -                | -         |    -3.92 | chop, Cxzi, Grizz, viz, WolfY    |
|           63 |     1030 | 2025-11-09 | FlyQuest RED      | W   | 0.820      | 0.333        | 0.018 (0.005)    | -                | 1 (0.820) |     2.48 | chop, Cxzi, Grizz, viz, WolfY    |
|           62 |     1054 | 2025-11-08 | F5                | W   | 0.815      | -            | -                | -                | 1 (0.815) |     0.86 | chop, Cxzi, Grizz, viz, WolfY    |
|           61 |     1061 | 2025-11-08 | barry pickers     | W   | 0.815      | -            | -                | -                | 1 (0.815) |     0.36 | chop, Cxzi, Grizz, viz, WolfY    |
|           60 |     1238 | 2025-11-05 | Voca              | W   | 0.796      | 0.333        | 0.042 (0.011)    | 0.620 (0.165)    | -         |     6.64 | chop, Cxzi, Grizz, viz, WolfY    |
|           59 |     1344 | 2025-11-01 | M80               | L   | 0.769      | -            | -                | -                | -         |    -3.78 | chop, Cxzi, Grizz, viz, WolfY    |
|           58 |     1354 | 2025-11-01 | Ghost             | W   | 0.768      | -            | -                | -                | 1 (0.768) |     1.35 | chop, Cxzi, Grizz, viz, WolfY    |
|           57 |     1400 | 2025-10-30 | BOSS              | W   | 0.756      | 0.333        | -                | 0.470 (0.118)    | -         |     3.00 | chop, Cxzi, Grizz, viz, WolfY    |
|           56 |     1441 | 2025-10-28 | OverKnight        | W   | 0.742      | -            | -                | -                | -         |     2.02 | chop, Cxzi, Grizz, viz, WolfY    |
|           55 |     1513 | 2025-10-26 | Phoenix           | W   | 0.730      | -            | -                | -                | -         |     1.84 | chop, Cxzi, Grizz, viz, WolfY    |
|           54 |     1526 | 2025-10-26 | NRG               | L   | 0.729      | -            | -                | -                | -         |    -4.08 | chop, Cxzi, Grizz, viz, WolfY    |
|           53 |     1535 | 2025-10-26 | SkinRave          | W   | 0.728      | 0.303        | 0.050 (0.011)    | 0.546 (0.120)    | -         |     6.98 | chop, Cxzi, Grizz, viz, WolfY    |
|           52 |     1582 | 2025-10-25 | LAG               | W   | 0.722      | 0.303        | -                | 0.469 (0.103)    | -         |     2.18 | chop, Cxzi, Grizz, viz, WolfY    |
|           51 |     1628 | 2025-10-24 | Nocturnal         | W   | 0.716      | -            | -                | -                | -         |     1.26 | chop, Cxzi, Grizz, viz, WolfY    |
|           50 |     1757 | 2025-10-21 | LAG               | W   | 0.696      | 0.333        | -                | 0.469 (0.109)    | -         |     2.10 | chop, Cxzi, Grizz, viz, WolfY    |
|           49 |     1775 | 2025-10-20 | Take Flyte        | W   | 0.690      | -            | -                | -                | -         |     1.15 | chop, CLASIA, Cxzi, Grizz, WolfY |
|           48 |     1799 | 2025-10-18 | Wildcard          | L   | 0.676      | -            | -                | -                | -         |   -15.22 | chop, Grizz, motm, viz, WolfY    |
|           47 |     1822 | 2025-10-17 | SkinRave          | L   | 0.669      | -            | -                | -                | -         |   -15.62 | chop, Grizz, motm, viz, WolfY    |
|           46 |     1926 | 2025-10-14 | Wildcard          | W   | 0.649      | 0.363        | 0.022 (0.005)    | -                | -         |     5.08 | chop, Grizz, motm, viz, WolfY    |
|           45 |     1958 | 2025-10-13 | SportsBetExpert   | W   | 0.642      | -            | -                | -                | -         |     1.15 | chop, Cxzi, Grizz, viz, WolfY    |
|           44 |     2096 | 2025-10-08 | LAG               | W   | 0.610      | 0.363        | -                | 0.469 (0.104)    | -         |     1.59 | chop, Cxzi, Grizz, viz, WolfY    |
|           43 |     2214 | 2025-10-06 | NuTorious         | W   | 0.596      | -            | -                | -                | -         |     0.58 | chop, Cxzi, Grizz, viz, WolfY    |
|           42 |     2345 | 2025-10-04 | SAW               | L   | 0.580      | -            | -                | -                | -         |    -1.56 | chop, Cxzi, Grizz, viz, WolfY    |
|           41 |     2795 | 2025-09-22 | Wildcard          | L   | 0.503      | -            | -                | -                | -         |   -11.93 | chop, Cxzi, Grizz, viz, WolfY    |
|           40 |     2844 | 2025-09-20 | Voca              | W   | 0.489      | 0.363        | 0.042 (0.007)    | 0.620 (0.110)    | -         |     3.44 | chop, Cxzi, Grizz, viz, WolfY    |
|           39 |     2939 | 2025-09-17 | SkinRave          | W   | 0.470      | 0.363        | 0.050 (0.009)    | -                | -         |     3.58 | chop, Cxzi, Grizz, viz, WolfY    |
|           38 |     3026 | 2025-09-14 | Wildcard          | W   | 0.450      | -            | -                | -                | -         |     3.44 | chop, Cxzi, Grizz, viz, WolfY    |
|           37 |     3028 | 2025-09-14 | Voca              | W   | 0.449      | 0.303        | 0.042 (0.006)    | -                | -         |     3.23 | chop, Cxzi, Grizz, viz, WolfY    |
|           36 |     3075 | 2025-09-13 | Fisher College    | W   | 0.442      | -            | -                | -                | -         |     0.35 | chop, Cxzi, Grizz, viz, WolfY    |
|           35 |     3165 | 2025-09-11 | Outfit 49         | W   | 0.429      | -            | -                | -                | -         |     0.36 | chop, Grizz, motm, viz, WolfY    |
|           34 |     3268 | 2025-09-09 | regain            | W   | 0.416      | -            | -                | -                | -         |     1.09 | chop, Grizz, motm, viz, WolfY    |
|           33 |     3390 | 2025-09-06 | Ninjas in Pyjamas | L   | 0.395      | -            | -                | -                | -         |    -1.36 | chop, Grizz, motm, viz, WolfY    |
|           32 |     3397 | 2025-09-06 | Phoenix           | W   | 0.394      | -            | -                | -                | 1 (0.394) |     1.02 | chop, Grizz, motm, viz, WolfY    |
|           31 |     3470 | 2025-09-01 | SkinRave          | L   | 0.363      | -            | -                | -                | -         |    -8.86 | chop, Grizz, motm, viz, WolfY    |
|           30 |     3579 | 2025-08-28 | Phoenix           | W   | 0.336      | -            | -                | -                | -         |     0.84 | chop, Grizz, motm, viz, WolfY    |
|           29 |     3602 | 2025-08-27 | SkinRave          | L   | 0.330      | -            | -                | -                | -         |    -8.37 | chop, Grizz, motm, viz, WolfY    |
|           28 |     3629 | 2025-08-26 | regain            | W   | 0.323      | -            | -                | -                | -         |     0.79 | chop, Grizz, motm, viz, WolfY    |
|           27 |     3693 | 2025-08-22 | BOSS              | W   | 0.296      | -            | -                | -                | -         |     0.95 | chop, Grizz, motm, viz, WolfY    |
|           26 |     3706 | 2025-08-21 | SkinRave          | L   | 0.290      | -            | -                | -                | -         |    -7.45 | chop, Grizz, motm, viz, WolfY    |
|           25 |     3764 | 2025-08-19 | Phoenix           | W   | 0.276      | -            | -                | -                | -         |     0.63 | chop, Grizz, motm, viz, WolfY    |
|           24 |     3828 | 2025-08-16 | Zomblers          | W   | 0.256      | -            | -                | -                | -         |     0.47 | chop, Grizz, motm, viz, WolfY    |
|           23 |     3832 | 2025-08-16 | SkinRave          | L   | 0.255      | -            | -                | -                | -         |    -6.68 | chop, Grizz, motm, viz, WolfY    |
|           22 |     3873 | 2025-08-15 | Arrival Seven     | W   | 0.249      | -            | -                | -                | -         |     0.18 | chop, Grizz, motm, viz, WolfY    |
|           21 |     3925 | 2025-08-14 | M80               | L   | 0.243      | -            | -                | -                | -         |    -1.23 | chop, Grizz, motm, viz, WolfY    |
|           20 |     3976 | 2025-08-13 | M80               | L   | 0.235      | -            | -                | -                | -         |    -1.17 | chop, Grizz, motm, viz, WolfY    |
|           19 |     4021 | 2025-08-12 | Take Flyte        | W   | 0.229      | -            | -                | -                | -         |     0.14 | chop, Grizz, motm, viz, WolfY    |
|           18 |     4155 | 2025-08-09 | BOSS              | W   | 0.209      | -            | -                | -                | -         |     0.60 | chop, Grizz, motm, viz, WolfY    |
|           17 |     4190 | 2025-08-07 | Arrival Seven     | W   | 0.196      | -            | -                | -                | -         |     0.14 | chop, Grizz, motm, viz, WolfY    |
|           16 |     4260 | 2025-08-02 | M80               | L   | 0.160      | -            | -                | -                | -         |    -0.81 | chop, Grizz, motm, viz, WolfY    |
|           15 |     4281 | 2025-08-01 | Wildcard          | W   | 0.154      | -            | -                | -                | -         |     0.91 | chop, Grizz, motm, viz, WolfY    |
|           14 |     4313 | 2025-07-29 | Getting Info      | L   | 0.136      | -            | -                | -                | -         |    -4.07 | chop, Grizz, motm, viz, WolfY    |
|           13 |     4330 | 2025-07-28 | OverKnight        | W   | 0.129      | -            | -                | -                | -         |     0.24 | chop, Grizz, motm, viz, WolfY    |
|           12 |     4397 | 2025-07-26 | LAG               | W   | 0.115      | -            | -                | -                | -         |     0.14 | chop, Grizz, motm, viz, WolfY    |
|           11 |     4428 | 2025-07-24 | MIGHT             | W   | 0.102      | -            | -                | -                | -         |     0.04 | chop, Grizz, motm, viz, WolfY    |
|           10 |     4489 | 2025-07-19 | Fluxo             | L   | 0.068      | -            | -                | -                | -         |    -0.76 | chop, Grizz, motm, viz, WolfY    |
|            9 |     4494 | 2025-07-19 | LAG               | W   | 0.067      | -            | -                | -                | 1 (0.067) |     0.08 | chop, Grizz, motm, viz, WolfY    |
|            8 |     4523 | 2025-07-18 | NRG               | L   | 0.062      | -            | -                | -                | -         |    -0.39 | chop, Grizz, motm, viz, WolfY    |
|            7 |     4532 | 2025-07-18 | LAG               | W   | 0.061      | -            | -                | -                | 1 (0.061) |     0.07 | chop, Grizz, motm, viz, WolfY    |
|            6 |     4615 | 2025-07-14 | M80               | L   | 0.035      | -            | -                | -                | -         |    -0.18 | chop, Grizz, Lucid, Walco, WolfY |
|            5 |     4638 | 2025-07-13 | SkinRave          | W   | 0.029      | -            | -                | -                | -         |     0.14 | chop, Grizz, Lucid, Walco, WolfY |
|            4 |     4642 | 2025-07-13 | BOSS              | W   | 0.028      | -            | -                | -                | -         |     0.08 | chop, Grizz, Lucid, Walco, WolfY |
|            3 |     4656 | 2025-07-12 | OverKnight        | W   | 0.022      | -            | -                | -                | -         |     0.04 | chop, Grizz, Lucid, Walco, WolfY |
|            2 |     4660 | 2025-07-12 | SkinRave          | L   | 0.022      | -            | -                | -                | -         |    -0.58 | chop, Grizz, Lucid, Walco, WolfY |
|            1 |     4684 | 2025-07-11 | Zomblers          | W   | 0.016      | -            | -                | -                | -         |     0.03 | chop, Grizz, viz, Walco, WolfY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,909.61)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.863 | $4,000.00      | $3,452.69       |
| 2025-11-09 |      0.823 | $1,300.00      | $1,069.96       |
| 2025-11-05 |      0.796 | $5,000.00      | $3,982.03       |
| 2025-11-02 |      0.774 | $1,000.00      | $774.26         |
| 2025-10-26 |      0.729 | $1,000.00      | $728.92         |
| 2025-10-19 |      0.683 | $2,000.00      | $1,366.11       |
| 2025-09-22 |      0.503 | $4,000.00      | $2,011.44       |
| 2025-09-14 |      0.450 | $4,000.00      | $1,798.23       |
| 2025-09-02 |      0.370 | $1,000.00      | $369.70         |
| 2025-08-31 |      0.356 | $1,000.00      | $356.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
