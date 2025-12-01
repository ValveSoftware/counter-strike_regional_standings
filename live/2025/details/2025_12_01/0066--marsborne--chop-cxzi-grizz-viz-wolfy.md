### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, viz, WolfY<br />
Global Rank: [66](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [15]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  1102.1<br />
<br />
Final Rank Value (1102.1) = Starting Rank Value (1145.0) + Head To Head Adjustments (-42.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.410[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.159[<sup>2</sup>](#table1)
- LAN Wins: 0.628[<sup>2</sup>](#table1)

The average of these factors is 0.391<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1145.0
- 400 + ( ( 0.391 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1145.0


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
|           72 |      292 | 2025-11-16 | Voca              | L   | 1.000      | -            | -                | -                | -         |   -22.06 | chop, Cxzi, Grizz, viz, WolfY    |
|           71 |      305 | 2025-11-15 | SkinRave          | L   | 1.000      | -            | -                | -                | -         |   -17.65 | chop, Cxzi, Grizz, viz, WolfY    |
|           70 |      307 | 2025-11-15 | Zomblers          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.27 | chop, Cxzi, Grizz, viz, WolfY    |
|           69 |      328 | 2025-11-14 | Voca              | W   | 1.000      | 0.363        | 0.030 (0.011)    | 0.520 (0.189)    | 0 (0.000) |     8.21 | chop, Cxzi, Grizz, viz, WolfY    |
|           68 |      377 | 2025-11-12 | BOSS              | W   | 1.000      | 0.363        | -                | 0.455 (0.165)    | -         |     5.04 | chop, Cxzi, Grizz, viz, WolfY    |
|           67 |      407 | 2025-11-11 | Mythic            | W   | 1.000      | -            | -                | -                | -         |     2.93 | chop, Cxzi, Grizz, viz, WolfY    |
|           66 |      429 | 2025-11-10 | Voca              | L   | 1.000      | -            | -                | -                | -         |   -23.18 | chop, Cxzi, Grizz, viz, WolfY    |
|           65 |      457 | 2025-11-09 | SAW               | W   | 1.000      | 0.333        | 0.334 (0.111)    | 0.554 (0.185)    | 1 (1.000) |    29.01 | chop, Cxzi, Grizz, viz, WolfY    |
|           64 |      463 | 2025-11-09 | M80               | L   | 1.000      | -            | -                | -                | -         |    -6.04 | chop, Cxzi, Grizz, viz, WolfY    |
|           63 |      470 | 2025-11-09 | FlyQuest RED      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.24 | chop, Cxzi, Grizz, viz, WolfY    |
|           62 |      494 | 2025-11-08 | Reactor 9         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.07 | chop, Cxzi, Grizz, viz, WolfY    |
|           61 |      501 | 2025-11-08 | barry pickers     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.55 | chop, Cxzi, Grizz, viz, WolfY    |
|           60 |      678 | 2025-11-05 | Voca              | W   | 1.000      | 0.333        | 0.030 (0.010)    | 0.520 (0.173)    | -         |     8.50 | chop, Cxzi, Grizz, viz, WolfY    |
|           59 |      784 | 2025-11-01 | M80               | L   | 1.000      | -            | -                | -                | -         |    -6.41 | chop, Cxzi, Grizz, viz, WolfY    |
|           58 |      794 | 2025-11-01 | Ghost             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.98 | chop, Cxzi, Grizz, viz, WolfY    |
|           57 |      840 | 2025-10-30 | BOSS              | W   | 0.989      | 0.333        | -                | 0.455 (0.150)    | -         |     4.92 | chop, Cxzi, Grizz, viz, WolfY    |
|           56 |      881 | 2025-10-28 | OverKnight        | W   | 0.975      | -            | -                | -                | -         |     3.35 | chop, Cxzi, Grizz, viz, WolfY    |
|           55 |      953 | 2025-10-26 | Phoenix           | W   | 0.963      | -            | -                | -                | -         |     3.16 | chop, Cxzi, Grizz, viz, WolfY    |
|           54 |      966 | 2025-10-26 | NRG               | L   | 0.962      | -            | -                | -                | -         |    -8.34 | chop, Cxzi, Grizz, viz, WolfY    |
|           53 |      975 | 2025-10-26 | SkinRave          | W   | 0.961      | 0.303        | 0.048 (0.014)    | 0.531 (0.155)    | -         |    13.47 | chop, Cxzi, Grizz, viz, WolfY    |
|           52 |     1022 | 2025-10-25 | LAG               | W   | 0.955      | -            | -                | -                | -         |     4.01 | chop, Cxzi, Grizz, viz, WolfY    |
|           51 |     1068 | 2025-10-24 | Nocturnal         | W   | 0.949      | -            | -                | -                | -         |     2.04 | chop, Cxzi, Grizz, viz, WolfY    |
|           50 |     1197 | 2025-10-21 | LAG               | W   | 0.929      | 0.333        | -                | 0.431 (0.133)    | -         |     3.96 | chop, Cxzi, Grizz, viz, WolfY    |
|           49 |     1215 | 2025-10-20 | Take Flyte        | W   | 0.923      | -            | -                | -                | -         |     2.16 | chop, CLASIA, Cxzi, Grizz, WolfY |
|           48 |     1239 | 2025-10-18 | Wildcard          | L   | 0.909      | -            | -                | -                | -         |   -17.29 | chop, Grizz, motm, viz, WolfY    |
|           47 |     1262 | 2025-10-17 | SkinRave          | L   | 0.902      | -            | -                | -                | -         |   -16.90 | chop, Grizz, motm, viz, WolfY    |
|           46 |     1366 | 2025-10-14 | Wildcard          | W   | 0.883      | 0.363        | 0.026 (0.008)    | 0.535 (0.171)    | -         |     9.64 | chop, Grizz, motm, viz, WolfY    |
|           45 |     1398 | 2025-10-13 | SportsBetExpert   | W   | 0.876      | -            | -                | -                | -         |     1.98 | chop, Cxzi, Grizz, viz, WolfY    |
|           44 |     1536 | 2025-10-08 | LAG               | W   | 0.843      | -            | -                | -                | -         |     3.24 | chop, Cxzi, Grizz, viz, WolfY    |
|           43 |     1654 | 2025-10-06 | NuTorious         | W   | 0.829      | -            | -                | -                | -         |     1.11 | chop, Cxzi, Grizz, viz, WolfY    |
|           42 |     1785 | 2025-10-04 | SAW               | L   | 0.814      | -            | -                | -                | -         |    -1.78 | chop, Cxzi, Grizz, viz, WolfY    |
|           41 |     2235 | 2025-09-22 | Wildcard          | L   | 0.736      | -            | -                | -                | -         |   -14.34 | chop, Cxzi, Grizz, viz, WolfY    |
|           40 |     2284 | 2025-09-20 | Voca              | W   | 0.723      | 0.363        | 0.030 (0.008)    | 0.520 (0.136)    | -         |     4.50 | chop, Cxzi, Grizz, viz, WolfY    |
|           39 |     2379 | 2025-09-17 | SkinRave          | W   | 0.703      | 0.363        | 0.048 (0.012)    | 0.531 (0.135)    | -         |     8.87 | chop, Cxzi, Grizz, viz, WolfY    |
|           38 |     2466 | 2025-09-14 | Wildcard          | W   | 0.683      | 0.303        | 0.026 (0.005)    | -                | -         |     8.42 | chop, Cxzi, Grizz, viz, WolfY    |
|           37 |     2468 | 2025-09-14 | Voca              | W   | 0.682      | 0.303        | 0.030 (0.006)    | -                | -         |     4.46 | chop, Cxzi, Grizz, viz, WolfY    |
|           36 |     2515 | 2025-09-13 | Fisher College    | W   | 0.675      | -            | -                | -                | -         |     0.76 | chop, Cxzi, Grizz, viz, WolfY    |
|           35 |     2605 | 2025-09-11 | Outfit 49         | W   | 0.662      | -            | -                | -                | -         |     0.90 | chop, Grizz, motm, viz, WolfY    |
|           34 |     2708 | 2025-09-09 | regain            | W   | 0.649      | -            | -                | -                | -         |     2.49 | chop, Grizz, motm, viz, WolfY    |
|           33 |     2830 | 2025-09-06 | Ninjas in Pyjamas | L   | 0.628      | -            | -                | -                | -         |    -3.95 | chop, Grizz, motm, viz, WolfY    |
|           32 |     2837 | 2025-09-06 | Phoenix           | W   | 0.627      | -            | -                | -                | 1 (0.627) |     2.60 | chop, Grizz, motm, viz, WolfY    |
|           31 |     2910 | 2025-09-01 | SkinRave          | L   | 0.596      | -            | -                | -                | -         |   -11.33 | chop, Grizz, motm, viz, WolfY    |
|           30 |     3019 | 2025-08-28 | Phoenix           | W   | 0.569      | -            | -                | -                | -         |     2.29 | chop, Grizz, motm, viz, WolfY    |
|           29 |     3042 | 2025-08-27 | SkinRave          | L   | 0.563      | -            | -                | -                | -         |   -11.67 | chop, Grizz, motm, viz, WolfY    |
|           28 |     3069 | 2025-08-26 | regain            | W   | 0.556      | -            | -                | -                | -         |     1.99 | chop, Grizz, motm, viz, WolfY    |
|           27 |     3133 | 2025-08-22 | BOSS              | W   | 0.529      | -            | -                | -                | -         |     2.25 | chop, Grizz, motm, viz, WolfY    |
|           26 |     3146 | 2025-08-21 | SkinRave          | L   | 0.523      | -            | -                | -                | -         |   -11.16 | chop, Grizz, motm, viz, WolfY    |
|           25 |     3204 | 2025-08-19 | Phoenix           | W   | 0.509      | -            | -                | -                | -         |     1.87 | chop, Grizz, motm, viz, WolfY    |
|           24 |     3268 | 2025-08-16 | Zomblers          | W   | 0.489      | -            | -                | -                | -         |     1.25 | chop, Grizz, motm, viz, WolfY    |
|           23 |     3272 | 2025-08-16 | SkinRave          | L   | 0.488      | -            | -                | -                | -         |   -10.85 | chop, Grizz, motm, viz, WolfY    |
|           22 |     3313 | 2025-08-15 | Arrival Seven     | W   | 0.482      | -            | -                | -                | -         |     0.49 | chop, Grizz, motm, viz, WolfY    |
|           21 |     3365 | 2025-08-14 | M80               | L   | 0.476      | -            | -                | -                | -         |    -3.01 | chop, Grizz, motm, viz, WolfY    |
|           20 |     3416 | 2025-08-13 | M80               | L   | 0.468      | -            | -                | -                | -         |    -2.86 | chop, Grizz, motm, viz, WolfY    |
|           19 |     3461 | 2025-08-12 | Take Flyte        | W   | 0.463      | -            | -                | -                | -         |     0.69 | chop, Grizz, motm, viz, WolfY    |
|           18 |     3595 | 2025-08-09 | BOSS              | W   | 0.442      | -            | -                | -                | -         |     1.54 | chop, Grizz, motm, viz, WolfY    |
|           17 |     3630 | 2025-08-07 | Arrival Seven     | W   | 0.429      | -            | -                | -                | -         |     0.46 | chop, Grizz, motm, viz, WolfY    |
|           16 |     3700 | 2025-08-02 | M80               | L   | 0.393      | -            | -                | -                | -         |    -2.49 | chop, Grizz, motm, viz, WolfY    |
|           15 |     3721 | 2025-08-01 | Wildcard          | W   | 0.387      | -            | -                | -                | -         |     3.80 | chop, Grizz, motm, viz, WolfY    |
|           14 |     3753 | 2025-07-29 | Getting Info      | L   | 0.369      | -            | -                | -                | -         |   -10.49 | chop, Grizz, motm, viz, WolfY    |
|           13 |     3770 | 2025-07-28 | OverKnight        | W   | 0.362      | -            | -                | -                | -         |     0.92 | chop, Grizz, motm, viz, WolfY    |
|           12 |     3837 | 2025-07-26 | LAG               | W   | 0.348      | -            | -                | -                | -         |     0.18 | chop, Grizz, motm, viz, WolfY    |
|           11 |     3868 | 2025-07-24 | MIGHT             | W   | 0.335      | -            | -                | -                | -         |     0.26 | chop, Grizz, motm, viz, WolfY    |
|           10 |     3929 | 2025-07-19 | Fluxo             | L   | 0.301      | -            | -                | -                | -         |    -2.46 | chop, Grizz, motm, viz, WolfY    |
|            9 |     3934 | 2025-07-19 | LAG               | W   | 0.300      | -            | -                | -                | 1 (0.300) |     0.76 | chop, Grizz, motm, viz, WolfY    |
|            8 |     3963 | 2025-07-18 | NRG               | L   | 0.295      | -            | -                | -                | -         |    -2.92 | chop, Grizz, motm, viz, WolfY    |
|            7 |     3972 | 2025-07-18 | LAG               | W   | 0.294      | -            | -                | -                | 1 (0.294) |     0.74 | chop, Grizz, motm, viz, WolfY    |
|            6 |     4055 | 2025-07-14 | M80               | L   | 0.268      | -            | -                | -                | -         |    -1.81 | chop, Grizz, Lucid, Walco, WolfY |
|            5 |     4078 | 2025-07-13 | SkinRave          | W   | 0.262      | 0.624        | 0.048 (0.008)    | -                | -         |     1.98 | chop, Grizz, Lucid, Walco, WolfY |
|            4 |     4082 | 2025-07-13 | BOSS              | W   | 0.261      | -            | -                | -                | -         |     0.83 | chop, Grizz, Lucid, Walco, WolfY |
|            3 |     4096 | 2025-07-12 | OverKnight        | W   | 0.255      | -            | -                | -                | -         |     0.65 | chop, Grizz, Lucid, Walco, WolfY |
|            2 |     4100 | 2025-07-12 | SkinRave          | L   | 0.255      | -            | -                | -                | -         |    -6.18 | chop, Grizz, Lucid, Walco, WolfY |
|            1 |     4124 | 2025-07-11 | Zomblers          | W   | 0.249      | -            | -                | -                | -         |     0.57 | chop, Grizz, viz, Walco, WolfY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,960.53)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      1.000 | $4,000.00      | $4,000.00       |
| 2025-11-09 |      1.000 | $1,300.00      | $1,300.00       |
| 2025-11-05 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-11-02 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-10-26 |      0.962 | $1,000.00      | $961.99         |
| 2025-10-19 |      0.916 | $2,000.00      | $1,832.24       |
| 2025-09-22 |      0.736 | $4,000.00      | $2,943.71       |
| 2025-09-14 |      0.683 | $4,000.00      | $2,730.49       |
| 2025-09-02 |      0.603 | $1,000.00      | $602.76         |
| 2025-08-31 |      0.589 | $1,000.00      | $589.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
