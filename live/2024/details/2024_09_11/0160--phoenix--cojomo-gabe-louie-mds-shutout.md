### Roster Details<br />
Team Name: Phoenix<br />
Roster: CoJoMo, Gabe, Louie, mds, shutout<br />
Global Rank: [160](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_11.md)<br />
Regional Rank: [46]( ../../standings_americas_2024_09_11.md)<br />
<br />
Final Rank Value:  670.5<br />
<br />
Final Rank Value (670.5) = Starting Rank Value (697.6) + Head To Head Adjustments (-27.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.6
- 400 + ( ( 0.153 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 697.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      503 | 2024-08-26 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |   -12.57 | CoJoMo, Gabe, Louie, mds, shutout         |
|           45 |      518 | 2024-08-26 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -4.65 | CoJoMo, Gabe, Louie, mds, shutout         |
|           44 |      884 | 2024-08-15 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.33 | CoJoMo, Gabe, Louie, mds, shutout         |
|           43 |     1029 | 2024-08-11 | Revenge Nation   | W   | 0.996      | 0.371        | 0.001 (0.000)    | 0.144 (0.053)    | 0 (0.000) |    16.08 | CoJoMo, Gabe, Louie, mds, shutout         |
|           42 |     1102 | 2024-08-08 | undefined        | L   | 0.976      | -            | -                | -                | -         |   -14.08 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           41 |     1280 | 2024-08-03 | DETONATE         | W   | 0.943      | 0.371        | -                | 0.128 (0.045)    | 0 (0.000) |     8.93 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           40 |     1644 | 2024-07-24 | Aether           | W   | 0.875      | -            | -                | -                | 0 (0.000) |     4.72 | CoJoMo, Gabe, mds, nooz, shutout          |
|           39 |     1762 | 2024-07-20 | timbermen        | L   | 0.848      | -            | -                | -                | -         |    -3.50 | CoJoMo, Gabe, mds, nooz, shutout          |
|           38 |     1896 | 2024-07-17 | timbermen        | L   | 0.829      | -            | -                | -                | -         |    -3.31 | CoJoMo, Gabe, mds, shutout, xaler         |
|           37 |     1900 | 2024-07-17 | timbermen        | L   | 0.829      | -            | -                | -                | -         |    -3.42 | CoJoMo, Gabe, mds, shutout, xaler         |
|           36 |     1960 | 2024-07-16 | Take Flyte       | L   | 0.822      | -            | -                | -                | -         |    -9.62 | CoJoMo, Gabe, mds, shutout, xaler         |
|           35 |     1966 | 2024-07-16 | Take Flyte       | L   | 0.822      | -            | -                | -                | -         |   -10.30 | CoJoMo, Gabe, mds, shutout, xaler         |
|           34 |     2315 | 2024-06-14 | Akimbo           | L   | 0.608      | -            | -                | -                | -         |    -7.98 | CoJoMo, Gabe, mds, shutout, xaler         |
|           33 |     2768 | 2024-06-04 | Mythic           | L   | 0.541      | -            | -                | -                | -         |    -7.00 | CoJoMo, Gabe, Louie, mds, shutout         |
|           32 |     3069 | 2024-05-22 | BOSS             | L   | 0.456      | -            | -                | -                | -         |    -6.32 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           31 |     3072 | 2024-05-22 | BOSS             | W   | 0.456      | 0.477        | 0.013 (0.003)    | 0.387 (0.084)    | 0 (0.000) |     8.22 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           30 |     3117 | 2024-05-21 | NRG              | W   | 0.449      | 0.477        | 0.031 (0.007)    | 0.553 (0.118)    | 0 (0.000) |    10.53 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           29 |     3119 | 2024-05-21 | NRG              | L   | 0.449      | -            | -                | -                | -         |    -3.63 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           28 |     3152 | 2024-05-20 | FLUFFY AIMERS    | L   | 0.442      | -            | -                | -                | -         |    -6.37 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           27 |     3157 | 2024-05-20 | FLUFFY AIMERS    | W   | 0.442      | 0.477        | 0.006 (0.001)    | 0.525 (0.111)    | 0 (0.000) |     7.73 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           26 |     3319 | 2024-05-15 | Mythic           | L   | 0.409      | -            | -                | -                | -         |    -5.52 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           25 |     3325 | 2024-05-15 | Mythic           | W   | 0.409      | 0.477        | 0.007 (0.001)    | 0.300 (0.059)    | 0 (0.000) |     7.54 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           24 |     3387 | 2024-05-14 | timbermen        | L   | 0.402      | -            | -                | -                | -         |    -1.40 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           23 |     3391 | 2024-05-14 | timbermen        | L   | 0.402      | -            | -                | -                | -         |    -1.42 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           22 |     3443 | 2024-05-12 | NRG              | L   | 0.389      | -            | -                | -                | -         |    -3.54 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           21 |     3450 | 2024-05-12 | Mythic           | W   | 0.388      | 0.270        | 0.007 (0.001)    | 0.300 (0.031)    | 0 (0.000) |     7.23 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           20 |     3471 | 2024-05-11 | BOSS             | W   | 0.381      | 0.270        | 0.013 (0.001)    | 0.387 (0.040)    | 0 (0.000) |     7.49 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           19 |     3475 | 2024-05-11 | NRG              | L   | 0.381      | -            | -                | -                | -         |    -3.49 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           18 |     3479 | 2024-05-11 | Party Astronauts | W   | 0.381      | 0.270        | 0.033 (0.003)    | 0.466 (0.048)    | 0 (0.000) |     8.93 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           17 |     3539 | 2024-05-08 | Nouns            | L   | 0.362      | -            | -                | -                | -         |    -1.08 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           16 |     3541 | 2024-05-08 | Nouns            | L   | 0.362      | -            | -                | -                | -         |    -1.09 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           15 |     4050 | 2024-04-17 | Nouns            | L   | 0.222      | -            | -                | -                | -         |    -0.64 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           14 |     4201 | 2024-04-10 | MIGHT            | L   | 0.176      | -            | -                | -                | -         |    -4.20 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           13 |     4208 | 2024-04-10 | MIGHT            | W   | 0.176      | -            | -                | -                | -         |     1.34 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           12 |     4385 | 2024-04-04 | Carpe Diem       | W   | 0.136      | 0.477        | 0.004 (0.000)    | -                | -         |     2.17 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           11 |     4391 | 2024-04-04 | Carpe Diem       | W   | 0.136      | 0.477        | 0.004 (0.000)    | -                | -         |     2.19 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           10 |     4433 | 2024-04-03 | Limitless        | W   | 0.129      | -            | -                | -                | -         |     1.65 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            9 |     4436 | 2024-04-03 | Limitless        | W   | 0.129      | -            | -                | -                | -         |     1.66 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            8 |     4483 | 2024-04-02 | Party Astronauts | L   | 0.123      | -            | -                | -                | -         |    -1.07 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            7 |     4487 | 2024-04-02 | BOSS             | L   | 0.122      | -            | -                | -                | -         |    -1.43 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            6 |     4571 | 2024-03-27 | M80              | L   | 0.082      | -            | -                | -                | -         |    -0.18 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            5 |     4576 | 2024-03-27 | M80              | L   | 0.082      | -            | -                | -                | -         |    -0.18 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            4 |     4697 | 2024-03-20 | LAG              | W   | 0.036      | 0.477        | -                | 0.392 (0.007)    | -         |     0.74 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|            3 |     4699 | 2024-03-20 | LAG              | L   | 0.035      | -            | -                | -                | -         |    -0.39 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|            2 |     4713 | 2024-03-19 | Party Astronauts | L   | 0.030      | -            | -                | -                | -         |    -0.26 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|            1 |     4716 | 2024-03-19 | Party Astronauts | L   | 0.029      | -            | -                | -                | -         |    -0.26 | BeaKie, CoJoMo, Gabe, mds, X-23           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($921.51)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
