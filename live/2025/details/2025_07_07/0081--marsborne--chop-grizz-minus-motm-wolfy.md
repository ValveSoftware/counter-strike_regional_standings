### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Grizz, Minus, motm, WolfY<br />
Global Rank: [81](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [20]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  848.8<br />
<br />
Final Rank Value (848.8) = Starting Rank Value (824.6) + Head To Head Adjustments (24.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.129[<sup>2</sup>](#table1)
- LAN Wins: 0.116[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 824.6
- 400 + ( ( 0.228 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 824.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |      739 | 2025-05-13 | BOSS               | L   | 0.835      | -            | -                | -                | -         |   -10.40 | chop, Grizz, Minus, motm, WolfY  |
|           65 |      834 | 2025-05-10 | BLUEJAYS           | W   | 0.815      | 0.384        | 0.031 (0.010)    | 0.600 (0.188)    | 0 (0.000) |    14.64 | chop, Grizz, Minus, motm, WolfY  |
|           64 |      859 | 2025-05-09 | Tsunami            | W   | 0.809      | 0.384        | -                | 0.237 (0.074)    | 0 (0.000) |     6.56 | chop, Grizz, Minus, motm, WolfY  |
|           63 |      938 | 2025-05-06 | Legacy             | L   | 0.789      | -            | -                | -                | -         |    -2.25 | chop, Grizz, Minus, motm, WolfY  |
|           62 |     1017 | 2025-05-03 | BLUEJAYS           | L   | 0.768      | -            | -                | -                | -         |   -11.10 | chop, Grizz, Minus, motm, WolfY  |
|           61 |     1020 | 2025-05-03 | NRG                | L   | 0.767      | -            | -                | -                | -         |    -5.37 | chop, Grizz, Minus, motm, WolfY  |
|           60 |     1024 | 2025-05-03 | BLUEJAYS           | W   | 0.767      | 0.303        | 0.031 (0.007)    | 0.600 (0.139)    | 0 (0.000) |    13.10 | chop, Grizz, Minus, motm, WolfY  |
|           59 |     1089 | 2025-04-30 | BLUEJAYS           | W   | 0.749      | 0.333        | 0.031 (0.008)    | 0.600 (0.150)    | 0 (0.000) |    13.68 | chop, Grizz, Minus, motm, WolfY  |
|           58 |     1124 | 2025-04-29 | Fisher College     | W   | 0.742      | -            | -                | -                | 0 (0.000) |     9.01 | chop, Grizz, Minus, motm, WolfY  |
|           57 |     1235 | 2025-04-24 | Daaku              | W   | 0.709      | -            | -                | -                | 0 (0.000) |     4.35 | chop, Grizz, Minus, motm, WolfY  |
|           56 |     1291 | 2025-04-20 | Wanted Goons       | W   | 0.682      | -            | -                | -                | 0 (0.000) |     5.90 | chop, Grizz, Minus, motm, WolfY  |
|           55 |     1306 | 2025-04-19 | BLUEJAYS           | L   | 0.675      | -            | -                | -                | -         |    -8.99 | chop, Grizz, Minus, motm, WolfY  |
|           54 |     1348 | 2025-04-17 | BOSS               | L   | 0.660      | -            | -                | -                | -         |    -7.48 | chop, Grizz, Minus, motm, WolfY  |
|           53 |     1379 | 2025-04-16 | BLUEJAYS           | W   | 0.654      | 0.143        | 0.031 (0.003)    | -                | -         |    11.98 | chop, Grizz, Minus, motm, WolfY  |
|           52 |     1404 | 2025-04-15 | Wildcard           | L   | 0.648      | -            | -                | -                | -         |    -5.44 | chop, Grizz, Minus, motm, WolfY  |
|           51 |     1450 | 2025-04-13 | BOSS               | W   | 0.635      | 0.333        | 0.023 (0.005)    | 0.659 (0.140)    | -         |    13.27 | chop, Grizz, Minus, motm, WolfY  |
|           50 |     1500 | 2025-04-10 | Daaku              | L   | 0.615      | -            | -                | -                | -         |   -15.89 | chop, Grizz, Minus, motm, WolfY  |
|           49 |     1555 | 2025-04-08 | InControl          | W   | 0.602      | -            | -                | -                | -         |     2.79 | chop, Grizz, Minus, motm, WolfY  |
|           48 |     1559 | 2025-04-08 | InControl          | W   | 0.602      | -            | -                | -                | -         |     2.87 | chop, Grizz, Minus, motm, WolfY  |
|           47 |     1613 | 2025-04-07 | JERSA              | W   | 0.595      | -            | -                | -                | -         |     5.66 | chop, Grizz, Minus, motm, WolfY  |
|           46 |     1720 | 2025-04-02 | Party Astronauts   | L   | 0.562      | -            | -                | -                | -         |    -9.66 | chop, Grizz, Minus, motm, WolfY  |
|           45 |     1730 | 2025-04-02 | Party Astronauts   | W   | 0.562      | 0.477        | -                | 0.380 (0.102)    | -         |     8.21 | chop, Grizz, Minus, motm, WolfY  |
|           44 |     1789 | 2025-04-01 | Legacy             | L   | 0.556      | -            | -                | -                | -         |    -0.82 | chop, Grizz, Minus, motm, WolfY  |
|           43 |     1796 | 2025-04-01 | Legacy             | L   | 0.555      | -            | -                | -                | -         |    -0.83 | chop, Grizz, Minus, motm, WolfY  |
|           42 |     1843 | 2025-03-30 | M80                | L   | 0.543      | -            | -                | -                | -         |    -5.14 | chop, Grizz, Minus, motm, WolfY  |
|           41 |     1846 | 2025-03-30 | Mythic             | W   | 0.542      | -            | -                | -                | -         |     2.86 | chop, Grizz, Minus, motm, WolfY  |
|           40 |     1886 | 2025-03-29 | M80                | L   | 0.535      | -            | -                | -                | -         |    -5.23 | chop, Grizz, Minus, motm, WolfY  |
|           39 |     1944 | 2025-03-28 | Aether             | W   | 0.529      | -            | -                | -                | -         |     5.09 | chop, Grizz, Minus, motm, WolfY  |
|           38 |     2009 | 2025-03-27 | seoul              | W   | 0.523      | -            | -                | -                | -         |     1.40 | chop, Grizz, Minus, motm, WolfY  |
|           37 |     2082 | 2025-03-26 | NRG                | W   | 0.516      | 0.477        | 0.068 (0.017)    | 0.595 (0.146)    | -         |    12.87 | chop, Grizz, Minus, motm, WolfY  |
|           36 |     2087 | 2025-03-26 | NRG                | W   | 0.516      | 0.477        | 0.068 (0.017)    | 0.595 (0.146)    | -         |    13.24 | chop, Grizz, Minus, motm, WolfY  |
|           35 |     2133 | 2025-03-25 | Akimbo             | L   | 0.509      | -            | -                | -                | -         |   -10.40 | chop, Grizz, Minus, motm, WolfY  |
|           34 |     2140 | 2025-03-25 | Akimbo             | W   | 0.509      | -            | -                | -                | -         |     5.71 | chop, Grizz, Minus, motm, WolfY  |
|           33 |     2326 | 2025-03-18 | LFO 4              | L   | 0.463      | -            | -                | -                | -         |    -6.85 | chop, Grizz, Minus, motm, WolfY  |
|           32 |     2332 | 2025-03-18 | LFO 4              | L   | 0.463      | -            | -                | -                | -         |    -7.13 | chop, Grizz, Minus, motm, WolfY  |
|           31 |     2702 | 2025-03-07 | Fisher College     | L   | 0.388      | -            | -                | -                | -         |    -8.29 | chop, Grizz, Minus, motm, WolfY  |
|           30 |     2754 | 2025-03-06 | LAG                | L   | 0.382      | -            | -                | -                | -         |    -6.81 | chop, Grizz, Minus, motm, WolfY  |
|           29 |     2805 | 2025-03-05 | MIGHT              | W   | 0.375      | -            | -                | -                | -         |     3.74 | chop, Grizz, Minus, motm, WolfY  |
|           28 |     2875 | 2025-03-02 | BOSS               | L   | 0.356      | -            | -                | -                | -         |    -3.93 | chop, Grizz, Minus, motm, WolfY  |
|           27 |     2876 | 2025-03-02 | Getting Info       | W   | 0.355      | 0.333        | 0.019 (0.002)    | -                | 1 (0.355) |     6.62 | chop, Grizz, Minus, motm, WolfY  |
|           26 |     2892 | 2025-03-01 | Wanted Goons       | W   | 0.349      | -            | -                | -                | 1 (0.349) |     3.10 | chop, Grizz, Minus, motm, WolfY  |
|           25 |     2900 | 2025-03-01 | SUPER EVIL GANG    | W   | 0.348      | -            | -                | -                | 1 (0.348) |     1.80 | chop, Grizz, Minus, motm, WolfY  |
|           24 |     2972 | 2025-02-26 | BOSS               | W   | 0.329      | 0.477        | 0.023 (0.004)    | 0.659 (0.104)    | -         |     6.96 | chop, Grizz, Minus, motm, WolfY  |
|           23 |     2978 | 2025-02-26 | BOSS               | W   | 0.329      | 0.477        | 0.023 (0.004)    | 0.659 (0.103)    | -         |     7.13 | chop, Grizz, Minus, motm, WolfY  |
|           22 |     3024 | 2025-02-25 | LAG                | L   | 0.323      | -            | -                | -                | -         |    -5.67 | BeaKie, chop, Minus, motm, WolfY |
|           21 |     3030 | 2025-02-25 | LAG                | W   | 0.322      | -            | -                | -                | -         |     4.58 | BeaKie, chop, Minus, motm, WolfY |
|           20 |     3184 | 2025-02-19 | Getting Info       | L   | 0.283      | -            | -                | -                | -         |    -3.40 | chop, Minus, motm, steel, WolfY  |
|           19 |     3186 | 2025-02-19 | Getting Info       | L   | 0.282      | -            | -                | -                | -         |    -3.48 | chop, Minus, motm, steel, WolfY  |
|           18 |     3220 | 2025-02-18 | Nouns              | L   | 0.276      | -            | -                | -                | -         |    -5.55 | chop, Minus, motm, steel, WolfY  |
|           17 |     3224 | 2025-02-18 | Nouns              | L   | 0.276      | -            | -                | -                | -         |    -5.67 | chop, Minus, motm, steel, WolfY  |
|           16 |     3402 | 2025-02-11 | BLUEJAYS           | L   | 0.230      | -            | -                | -                | -         |    -3.57 | chop, Grizz, Minus, motm, WolfY  |
|           15 |     3407 | 2025-02-11 | NRG                | L   | 0.228      | -            | -                | -                | -         |    -1.45 | chop, Grizz, Minus, motm, WolfY  |
|           14 |     3431 | 2025-02-10 | M80                | L   | 0.222      | -            | -                | -                | -         |    -2.65 | chop, Grizz, Minus, motm, WolfY  |
|           13 |     3437 | 2025-02-10 | MCS                | W   | 0.221      | -            | -                | -                | -         |     0.91 | chop, Grizz, Minus, motm, WolfY  |
|           12 |     3473 | 2025-02-09 | M80                | L   | 0.215      | -            | -                | -                | -         |    -2.60 | chop, Grizz, Minus, motm, WolfY  |
|           11 |     3505 | 2025-02-08 | BLUEJAYS           | W   | 0.209      | -            | -                | -                | -         |     3.35 | chop, Grizz, Minus, motm, WolfY  |
|           10 |     3509 | 2025-02-08 | Getting Info       | W   | 0.208      | -            | -                | -                | -         |     0.81 | chop, Grizz, Minus, motm, WolfY  |
|            9 |     3519 | 2025-02-08 | MCS                | W   | 0.208      | -            | -                | -                | -         |     0.85 | chop, Grizz, Minus, motm, WolfY  |
|            8 |     3733 | 2025-01-28 | Bad News Capybaras | L   | 0.136      | -            | -                | -                | -         |    -2.99 | BeaKie, chop, Minus, motm, WolfY |
|            7 |     3739 | 2025-01-28 | Bad News Capybaras | W   | 0.136      | -            | -                | -                | -         |     1.30 | BeaKie, chop, Minus, motm, WolfY |
|            6 |     3774 | 2025-01-27 | Worms              | W   | 0.129      | -            | -                | -                | -         |     0.99 | BeaKie, chop, Minus, motm, WolfY |
|            5 |     3779 | 2025-01-27 | Worms              | L   | 0.129      | -            | -                | -                | -         |    -3.10 | BeaKie, chop, Minus, motm, WolfY |
|            4 |     3814 | 2025-01-24 | Aether             | W   | 0.109      | -            | -                | -                | -         |     1.01 | chop, Minus, motm, steel, WolfY  |
|            3 |     3819 | 2025-01-24 | Aether             | W   | 0.109      | -            | -                | -                | -         |     1.02 | chop, Minus, motm, steel, WolfY  |
|            2 |     3886 | 2025-01-22 | Chicken Coop       | W   | 0.096      | -            | -                | -                | -         |     1.01 | chop, Grizz, Minus, motm, steel  |
|            1 |     3892 | 2025-01-22 | Chicken Coop       | L   | 0.096      | -            | -                | -                | -         |    -2.02 | chop, Grizz, Minus, motm, steel  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,279.11)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.822 | $2,000.00      | $1,644.72       |
| 2025-04-30 |      0.749 | $5,000.00      | $3,744.62       |
| 2025-03-02 |      0.356 | $2,500.00      | $889.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
