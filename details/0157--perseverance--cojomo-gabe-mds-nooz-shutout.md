### Roster Details<br />
Team Name: Perseverance<br />
Roster: CoJoMo, Gabe, mds, nooz, shutout<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [157](../standings_global.md)<br />
Regional Rank: [43]( ../standings_americas.md)<br />
Final Rank Value:  697.2<br />
<br />
Final Rank Value (697.2) = Starting Rank Value (751.5) + Head To Head Adjustments (-54.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.5
- 400 + ( ( 0.174 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 751.5


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
|           46 |      111 | 2024-07-20 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.30 | CoJoMo, Gabe, mds, nooz, shutout   |
|           45 |      245 | 2024-07-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.27 | CoJoMo, Gabe, mds, shutout, xaler  |
|           44 |      249 | 2024-07-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.54 | CoJoMo, Gabe, mds, shutout, xaler  |
|           43 |      309 | 2024-07-16 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -15.72 | CoJoMo, Gabe, mds, shutout, xaler  |
|           42 |      315 | 2024-07-16 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -17.17 | CoJoMo, Gabe, mds, shutout, xaler  |
|           41 |      664 | 2024-06-14 | OMiT             | L   | 0.934      | -            | -                | -                | -         |   -12.26 | CoJoMo, Gabe, mds, shutout, xaler  |
|           40 |     1117 | 2024-06-04 | Mythic           | L   | 0.867      | -            | -                | -                | -         |   -11.31 | CoJoMo, Gabe, Louie, mds, shutout  |
|           39 |     1418 | 2024-05-22 | BOSS             | L   | 0.782      | -            | -                | -                | -         |   -11.65 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           38 |     1421 | 2024-05-22 | BOSS             | W   | 0.782      | 0.477        | 0.018 (0.007)    | 0.378 (0.141)    | 0 (0.000) |    13.22 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           37 |     1466 | 2024-05-21 | NRG              | W   | 0.775      | 0.477        | 0.025 (0.009)    | 0.574 (0.212)    | 0 (0.000) |    18.24 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           36 |     1468 | 2024-05-21 | NRG              | L   | 0.775      | -            | -                | -                | -         |    -6.01 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           35 |     1501 | 2024-05-20 | FLUFFY AIMERS    | L   | 0.769      | -            | -                | -                | -         |   -14.28 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           34 |     1506 | 2024-05-20 | FLUFFY AIMERS    | W   | 0.768      | 0.477        | 0.004 (0.001)    | 0.173 (0.063)    | 0 (0.000) |     9.97 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           33 |     1668 | 2024-05-15 | Mythic           | L   | 0.735      | -            | -                | -                | -         |   -10.56 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           32 |     1674 | 2024-05-15 | Mythic           | W   | 0.735      | 0.477        | 0.012 (0.004)    | 0.310 (0.109)    | 0 (0.000) |    12.87 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           31 |     1736 | 2024-05-14 | Elevate          | L   | 0.728      | -            | -                | -                | -         |    -4.55 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           30 |     1740 | 2024-05-14 | Elevate          | L   | 0.728      | -            | -                | -                | -         |    -4.74 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           29 |     1792 | 2024-05-12 | NRG              | L   | 0.715      | -            | -                | -                | -         |    -6.91 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           28 |     1799 | 2024-05-12 | Mythic           | W   | 0.714      | 0.270        | 0.012 (0.002)    | 0.310 (0.060)    | 0 (0.000) |    12.55 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           27 |     1820 | 2024-05-11 | BOSS             | W   | 0.708      | 0.270        | 0.018 (0.003)    | 0.378 (0.072)    | 0 (0.000) |    13.56 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           26 |     1824 | 2024-05-11 | NRG              | L   | 0.707      | -            | -                | -                | -         |    -6.89 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           25 |     1828 | 2024-05-11 | Party Astronauts | W   | 0.707      | 0.270        | 0.053 (0.010)    | 0.591 (0.113)    | 0 (0.000) |    17.40 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           24 |     1888 | 2024-05-08 | Nouns            | L   | 0.689      | -            | -                | -                | -         |    -5.02 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           23 |     1890 | 2024-05-08 | Nouns            | L   | 0.688      | -            | -                | -                | -         |    -5.25 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           22 |     2399 | 2024-04-17 | Nouns            | L   | 0.548      | -            | -                | -                | -         |    -4.02 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           21 |     2550 | 2024-04-10 | MIGHT            | L   | 0.502      | -            | -                | -                | -         |   -12.27 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           20 |     2557 | 2024-04-10 | MIGHT            | W   | 0.502      | -            | -                | -                | 0 (0.000) |     3.53 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           19 |     2734 | 2024-04-04 | Carpe Diem       | W   | 0.462      | 0.477        | 0.007 (0.001)    | -                | 0 (0.000) |     5.79 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           18 |     2740 | 2024-04-04 | Carpe Diem       | W   | 0.462      | 0.477        | 0.007 (0.001)    | -                | 0 (0.000) |     6.02 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           17 |     2782 | 2024-04-03 | Limitless        | W   | 0.456      | 0.477        | -                | 0.196 (0.043)    | -         |     5.53 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           16 |     2785 | 2024-04-03 | Limitless        | W   | 0.455      | 0.477        | -                | 0.196 (0.043)    | -         |     5.74 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           15 |     2832 | 2024-04-02 | Party Astronauts | L   | 0.449      | -            | -                | -                | -         |    -3.29 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           14 |     2836 | 2024-04-02 | BOSS             | L   | 0.448      | -            | -                | -                | -         |    -5.48 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           13 |     2920 | 2024-03-27 | M80              | L   | 0.408      | -            | -                | -                | -         |    -0.63 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           12 |     2925 | 2024-03-27 | M80              | L   | 0.408      | -            | -                | -                | -         |    -0.63 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           11 |     3046 | 2024-03-20 | LAG              | W   | 0.362      | 0.477        | 0.017 (0.003)    | 0.385 (0.066)    | -         |     7.93 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           10 |     3048 | 2024-03-20 | LAG              | L   | 0.362      | -            | -                | -                | -         |    -3.51 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            9 |     3062 | 2024-03-19 | Party Astronauts | L   | 0.356      | -            | -                | -                | -         |    -2.60 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            8 |     3065 | 2024-03-19 | Party Astronauts | L   | 0.356      | -            | -                | -                | -         |    -2.66 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            7 |     3160 | 2024-03-14 | Wildcard         | L   | 0.322      | -            | -                | -                | -         |    -2.65 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            6 |     3162 | 2024-03-14 | Wildcard         | L   | 0.322      | -            | -                | -                | -         |    -2.71 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            5 |     3192 | 2024-03-13 | Mythic           | W   | 0.315      | -            | -                | -                | -         |     5.76 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            4 |     3233 | 2024-03-12 | bubibabu         | W   | 0.308      | -            | -                | -                | -         |     1.22 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            3 |     3659 | 2024-02-22 | MIGHT            | L   | 0.181      | -            | -                | -                | -         |    -4.40 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            2 |     3902 | 2024-02-13 | Take Flyte       | L   | 0.123      | -            | -                | -                | -         |    -2.10 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            1 |     3905 | 2024-02-13 | Take Flyte       | W   | 0.122      | -            | -                | -                | -         |     1.77 | BeaKie, CoJoMo, Gabe, mds, shutout |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,443.66)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
