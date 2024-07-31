### Roster Details<br />
Team Name: Perseverance<br />
Roster: CoJoMo, Gabe, mds, nooz, shutout<br />
Global Rank: [159](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [44]( ../standings_americas.md)<br />
<br />
Final Rank Value:  690.7<br />
<br />
Final Rank Value (690.7) = Starting Rank Value (741.0) + Head To Head Adjustments (-50.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.0
- 400 + ( ( 0.165 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 741.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      235 | 2024-07-24 | Victorum         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.17 | CoJoMo, Gabe, mds, nooz, shutout   |
|           46 |      353 | 2024-07-20 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.46 | CoJoMo, Gabe, mds, nooz, shutout   |
|           45 |      487 | 2024-07-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.45 | CoJoMo, Gabe, mds, shutout, xaler  |
|           44 |      491 | 2024-07-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.73 | CoJoMo, Gabe, mds, shutout, xaler  |
|           43 |      551 | 2024-07-16 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -15.61 | CoJoMo, Gabe, mds, shutout, xaler  |
|           42 |      557 | 2024-07-16 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -17.05 | CoJoMo, Gabe, mds, shutout, xaler  |
|           41 |      906 | 2024-06-14 | Akimbo           | L   | 0.887      | -            | -                | -                | -         |   -11.87 | CoJoMo, Gabe, mds, shutout, xaler  |
|           40 |     1359 | 2024-06-04 | Mythic           | L   | 0.820      | -            | -                | -                | -         |   -10.86 | CoJoMo, Gabe, Louie, mds, shutout  |
|           39 |     1660 | 2024-05-22 | BOSS             | L   | 0.735      | -            | -                | -                | -         |   -11.03 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           38 |     1663 | 2024-05-22 | BOSS             | W   | 0.735      | 0.477        | 0.014 (0.005)    | 0.334 (0.117)    | 0 (0.000) |    12.36 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           37 |     1708 | 2024-05-21 | NRG              | W   | 0.728      | 0.477        | 0.020 (0.007)    | 0.519 (0.180)    | 0 (0.000) |    16.95 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           36 |     1710 | 2024-05-21 | NRG              | L   | 0.728      | -            | -                | -                | -         |    -5.87 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           35 |     1743 | 2024-05-20 | FLUFFY AIMERS    | L   | 0.721      | -            | -                | -                | -         |   -12.89 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           34 |     1748 | 2024-05-20 | FLUFFY AIMERS    | W   | 0.721      | 0.477        | 0.003 (0.001)    | 0.233 (0.080)    | 0 (0.000) |     9.93 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           33 |     1910 | 2024-05-15 | Mythic           | L   | 0.688      | -            | -                | -                | -         |    -9.95 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           32 |     1916 | 2024-05-15 | Mythic           | W   | 0.688      | 0.477        | 0.010 (0.003)    | 0.266 (0.087)    | 0 (0.000) |    12.00 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           31 |     1978 | 2024-05-14 | Elevate          | L   | 0.681      | -            | -                | -                | -         |    -4.46 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           30 |     1982 | 2024-05-14 | Elevate          | L   | 0.681      | -            | -                | -                | -         |    -4.64 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           29 |     2034 | 2024-05-12 | NRG              | L   | 0.668      | -            | -                | -                | -         |    -6.60 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           28 |     2041 | 2024-05-12 | Mythic           | W   | 0.667      | 0.270        | 0.010 (0.002)    | 0.266 (0.048)    | 0 (0.000) |    11.64 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           27 |     2062 | 2024-05-11 | BOSS             | W   | 0.660      | 0.270        | 0.014 (0.003)    | 0.334 (0.060)    | 0 (0.000) |    12.51 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           26 |     2066 | 2024-05-11 | NRG              | L   | 0.660      | -            | -                | -                | -         |    -6.59 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           25 |     2070 | 2024-05-11 | Party Astronauts | W   | 0.660      | 0.270        | 0.042 (0.007)    | 0.532 (0.095)    | 0 (0.000) |    16.17 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           24 |     2130 | 2024-05-08 | Nouns            | L   | 0.641      | -            | -                | -                | -         |    -4.75 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           23 |     2132 | 2024-05-08 | Nouns            | L   | 0.641      | -            | -                | -                | -         |    -4.95 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           22 |     2641 | 2024-04-17 | Nouns            | L   | 0.501      | -            | -                | -                | -         |    -3.73 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           21 |     2792 | 2024-04-10 | MIGHT            | L   | 0.455      | -            | -                | -                | -         |   -11.06 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           20 |     2799 | 2024-04-10 | MIGHT            | W   | 0.455      | -            | -                | -                | 0 (0.000) |     3.27 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           19 |     2976 | 2024-04-04 | Carpe Diem       | W   | 0.415      | 0.477        | 0.005 (0.001)    | -                | 0 (0.000) |     5.28 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           18 |     2982 | 2024-04-04 | Carpe Diem       | W   | 0.415      | 0.477        | 0.005 (0.001)    | -                | -         |     5.47 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           17 |     3024 | 2024-04-03 | Limitless        | W   | 0.408      | 0.477        | -                | 0.170 (0.033)    | -         |     5.05 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           16 |     3027 | 2024-04-03 | Limitless        | W   | 0.408      | 0.477        | -                | 0.170 (0.033)    | -         |     5.22 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           15 |     3074 | 2024-04-02 | Party Astronauts | L   | 0.402      | -            | -                | -                | -         |    -2.97 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           14 |     3078 | 2024-04-02 | BOSS             | L   | 0.401      | -            | -                | -                | -         |    -5.02 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           13 |     3162 | 2024-03-27 | M80              | L   | 0.361      | -            | -                | -                | -         |    -0.66 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           12 |     3167 | 2024-03-27 | M80              | L   | 0.361      | -            | -                | -                | -         |    -0.66 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           11 |     3288 | 2024-03-20 | LAG              | W   | 0.315      | 0.477        | 0.013 (0.002)    | 0.344 (0.052)    | -         |     6.74 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           10 |     3290 | 2024-03-20 | LAG              | L   | 0.315      | -            | -                | -                | -         |    -3.21 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            9 |     3304 | 2024-03-19 | Party Astronauts | L   | 0.309      | -            | -                | -                | -         |    -2.28 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            8 |     3307 | 2024-03-19 | Party Astronauts | L   | 0.308      | -            | -                | -                | -         |    -2.33 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            7 |     3402 | 2024-03-14 | Wildcard         | L   | 0.275      | -            | -                | -                | -         |    -2.40 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            6 |     3404 | 2024-03-14 | Wildcard         | L   | 0.274      | -            | -                | -                | -         |    -2.45 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            5 |     3434 | 2024-03-13 | Mythic           | W   | 0.268      | -            | -                | -                | -         |     4.83 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            4 |     3475 | 2024-03-12 | bubibabu         | W   | 0.261      | -            | -                | -                | -         |     1.08 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            3 |     3901 | 2024-02-22 | MIGHT            | L   | 0.134      | -            | -                | -                | -         |    -3.23 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            2 |     4144 | 2024-02-13 | Take Flyte       | L   | 0.075      | -            | -                | -                | -         |    -1.27 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            1 |     4147 | 2024-02-13 | Take Flyte       | W   | 0.075      | -            | -                | -                | -         |     1.10 | BeaKie, CoJoMo, Gabe, mds, shutout |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,368.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
