### Roster Details<br />
Team Name: InControl<br />
Roster: aelor, calamity, jsfeltner, Scorchyy, TyRa<br />
Global Rank: [195](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [45]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  674.4<br />
<br />
Final Rank Value (674.4) = Starting Rank Value (692.3) + Head To Head Adjustments (-17.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.3
- 400 + ( ( 0.147 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 692.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      257 | 2025-12-11 | LAG             | L   | 1.000      | -            | -                | -                | -         |   -14.04 | aelor, calamity, jsfeltner, Scorchyy, TyRa |
|           30 |      267 | 2025-12-10 | SkinRave        | L   | 1.000      | -            | -                | -                | -         |    -4.04 | aelor, calamity, jsfeltner, Scorchyy, TyRa |
|           29 |      314 | 2025-12-07 | Voca            | L   | 1.000      | -            | -                | -                | -         |    -4.99 | aelor, calamity, jsfeltner, Scorchyy, TyRa |
|           28 |      364 | 2025-12-05 | Phoenix         | W   | 0.996      | 0.333        | 0.003 (0.001)    | 0.287 (0.095)    | 0 (0.000) |    15.62 | aelor, calamity, jsfeltner, Scorchyy, TyRa |
|           27 |      430 | 2025-12-02 | Lotus fe        | W   | 0.976      | 0.333        | 0.002 (0.001)    | 0.088 (0.029)    | 0 (0.000) |    13.95 | aelor, calamity, jsfeltner, Scorchyy, TyRa |
|           26 |     1476 | 2025-10-27 | Zomblers        | L   | 0.736      | -            | -                | -                | -         |   -11.11 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           25 |     1478 | 2025-10-27 | regain          | L   | 0.736      | -            | -                | -                | -         |   -10.06 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           24 |     1530 | 2025-10-26 | SkinRave        | L   | 0.729      | -            | -                | -                | -         |    -3.53 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           23 |     1625 | 2025-10-24 | Sakura          | W   | 0.716      | 0.363        | 0.059 (0.015)    | 0.277 (0.072)    | 0 (0.000) |    15.07 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           22 |     1689 | 2025-10-23 | Phoenix         | W   | 0.710      | 0.333        | 0.003 (0.001)    | 0.287 (0.068)    | 0 (0.000) |    12.33 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           21 |     1738 | 2025-10-22 | Nocturnal       | W   | 0.703      | 0.333        | 0.003 (0.001)    | 0.128 (0.030)    | 0 (0.000) |    10.41 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           20 |     1820 | 2025-10-17 | SportsBetExpert | L   | 0.669      | -            | -                | -                | -         |   -10.48 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           19 |     1885 | 2025-10-15 | Take Flyte      | L   | 0.657      | -            | -                | -                | -         |   -12.03 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           18 |     2101 | 2025-10-08 | Take Flyte      | L   | 0.609      | -            | -                | -                | -         |   -11.61 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           17 |     2212 | 2025-10-06 | regain          | L   | 0.596      | -            | -                | -                | -         |    -8.07 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           16 |     2215 | 2025-10-06 | Phoenix         | L   | 0.596      | -            | -                | -                | -         |    -9.23 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           15 |     2413 | 2025-10-02 | FlyQuest RED    | W   | 0.568      | 0.333        | 0.018 (0.003)    | 0.272 (0.051)    | 0 (0.000) |    11.37 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           14 |     2484 | 2025-09-30 | Zomblers        | W   | 0.555      | 0.333        | 0.001 (0.000)    | 0.232 (0.043)    | 0 (0.000) |     8.54 | Beast, BiNoX, calamity, Scorchyy, TyRa     |
|           13 |     3074 | 2025-09-13 | Voca            | L   | 0.443      | -            | -                | -                | -         |    -2.72 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           12 |     3169 | 2025-09-11 | BOSS            | L   | 0.429      | -            | -                | -                | -         |    -5.12 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           11 |     3217 | 2025-09-10 | Nocturnal       | W   | 0.423      | 0.363        | 0.003 (0.000)    | -                | 0 (0.000) |     6.07 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|           10 |     3323 | 2025-09-08 | Wanted Goons    | L   | 0.410      | -            | -                | -                | -         |    -9.41 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            9 |     3603 | 2025-08-27 | BOSS            | L   | 0.329      | -            | -                | -                | -         |    -3.93 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            8 |     3630 | 2025-08-26 | M80             | L   | 0.323      | -            | -                | -                | -         |    -0.13 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            7 |     3878 | 2025-08-15 | LAG             | L   | 0.249      | -            | -                | -                | -         |    -4.71 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            6 |     3921 | 2025-08-14 | OverKnight      | W   | 0.243      | 0.363        | -                | 0.266 (0.023)    | 0 (0.000) |     3.70 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            5 |     4024 | 2025-08-12 | Sakura          | W   | 0.229      | 0.363        | 0.059 (0.005)    | 0.277 (0.023)    | -         |     5.60 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            4 |     4073 | 2025-08-11 | FlyQuest RED    | W   | 0.223      | 0.363        | 0.018 (0.001)    | 0.272 (0.022)    | -         |     4.69 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            3 |     4498 | 2025-07-19 | SkinRave        | L   | 0.067      | -            | -                | -                | -         |    -0.54 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            2 |     4516 | 2025-07-18 | NuTorious       | W   | 0.063      | -            | -                | -                | 1 (0.063) |     0.59 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            1 |     4521 | 2025-07-18 | Fluxo           | L   | 0.062      | -            | -                | -                | -         |    -0.06 | Beast, calamity, jsfeltner, Scorchyy, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($508.51)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-08 |      0.609 | $250.00        | $152.23         |
| 2025-08-31 |      0.356 | $1,000.00      | $356.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
