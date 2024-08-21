### Roster Details<br />
Team Name: Phoenix<br />
Roster: CoJoMo, CooperTrooper, Gabe, mds, shutout<br />
Global Rank: [155](../../standings_global_2024_08_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_06.md)<br />
Regional Rank: [42]( ../../standings_americas_2024_08_06.md)<br />
<br />
Final Rank Value:  699.7<br />
<br />
Final Rank Value (699.7) = Starting Rank Value (738.6) + Head To Head Adjustments (-38.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.6
- 400 + ( ( 0.165 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 738.6


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
|           48 |       79 | 2024-08-03 | DETONATE         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.60 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           47 |      443 | 2024-07-24 | Aether           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.18 | CoJoMo, Gabe, mds, nooz, shutout          |
|           46 |      561 | 2024-07-20 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.44 | CoJoMo, Gabe, mds, nooz, shutout          |
|           45 |      695 | 2024-07-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.42 | CoJoMo, Gabe, mds, shutout, xaler         |
|           44 |      699 | 2024-07-17 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.71 | CoJoMo, Gabe, mds, shutout, xaler         |
|           43 |      759 | 2024-07-16 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -15.63 | CoJoMo, Gabe, mds, shutout, xaler         |
|           42 |      765 | 2024-07-16 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -17.07 | CoJoMo, Gabe, mds, shutout, xaler         |
|           41 |     1114 | 2024-06-14 | Akimbo           | L   | 0.848      | -            | -                | -                | -         |   -11.49 | CoJoMo, Gabe, mds, shutout, xaler         |
|           40 |     1567 | 2024-06-04 | Mythic           | L   | 0.781      | -            | -                | -                | -         |   -10.43 | CoJoMo, Gabe, Louie, mds, shutout         |
|           39 |     1868 | 2024-05-22 | BOSS             | L   | 0.696      | -            | -                | -                | -         |   -10.44 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           38 |     1871 | 2024-05-22 | BOSS             | W   | 0.695      | 0.477        | 0.014 (0.005)    | 0.318 (0.106)    | 0 (0.000) |    11.72 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           37 |     1916 | 2024-05-21 | NRG              | W   | 0.689      | 0.477        | 0.032 (0.011)    | 0.524 (0.172)    | 0 (0.000) |    16.20 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           36 |     1918 | 2024-05-21 | NRG              | L   | 0.689      | -            | -                | -                | -         |    -5.41 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           35 |     1951 | 2024-05-20 | FLUFFY AIMERS    | L   | 0.682      | -            | -                | -                | -         |   -11.84 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           34 |     1956 | 2024-05-20 | FLUFFY AIMERS    | W   | 0.682      | 0.477        | 0.003 (0.001)    | 0.304 (0.099)    | 0 (0.000) |     9.79 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           33 |     2118 | 2024-05-15 | Mythic           | L   | 0.649      | -            | -                | -                | -         |    -9.39 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           32 |     2124 | 2024-05-15 | Mythic           | W   | 0.649      | 0.477        | 0.010 (0.003)    | 0.285 (0.088)    | 0 (0.000) |    11.31 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           31 |     2186 | 2024-05-14 | Elevate          | L   | 0.642      | -            | -                | -                | -         |    -4.09 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           30 |     2190 | 2024-05-14 | Elevate          | L   | 0.641      | -            | -                | -                | -         |    -4.25 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           29 |     2242 | 2024-05-12 | NRG              | L   | 0.629      | -            | -                | -                | -         |    -5.90 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           28 |     2249 | 2024-05-12 | Mythic           | W   | 0.627      | 0.270        | 0.010 (0.002)    | 0.285 (0.048)    | 0 (0.000) |    10.97 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           27 |     2270 | 2024-05-11 | BOSS             | W   | 0.621      | 0.270        | 0.014 (0.002)    | 0.318 (0.053)    | 0 (0.000) |    11.76 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           26 |     2274 | 2024-05-11 | NRG              | L   | 0.621      | -            | -                | -                | -         |    -5.86 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           25 |     2278 | 2024-05-11 | Party Astronauts | W   | 0.620      | 0.270        | 0.041 (0.007)    | 0.510 (0.086)    | 0 (0.000) |    15.16 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           24 |     2338 | 2024-05-08 | Nouns            | L   | 0.602      | -            | -                | -                | -         |    -4.55 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           23 |     2340 | 2024-05-08 | Nouns            | L   | 0.602      | -            | -                | -                | -         |    -4.74 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           22 |     2849 | 2024-04-17 | Nouns            | L   | 0.461      | -            | -                | -                | -         |    -3.52 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           21 |     3000 | 2024-04-10 | MIGHT            | L   | 0.416      | -            | -                | -                | -         |   -10.14 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           20 |     3007 | 2024-04-10 | MIGHT            | W   | 0.415      | -            | -                | -                | 0 (0.000) |     2.96 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           19 |     3184 | 2024-04-04 | Carpe Diem       | W   | 0.376      | 0.477        | 0.005 (0.001)    | -                | -         |     4.79 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           18 |     3190 | 2024-04-04 | Carpe Diem       | W   | 0.375      | 0.477        | 0.005 (0.001)    | -                | -         |     4.94 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           17 |     3232 | 2024-04-03 | Limitless        | W   | 0.369      | 0.477        | -                | 0.159 (0.028)    | -         |     4.55 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           16 |     3235 | 2024-04-03 | Limitless        | W   | 0.369      | 0.477        | -                | 0.159 (0.028)    | -         |     4.69 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           15 |     3282 | 2024-04-02 | Party Astronauts | L   | 0.363      | -            | -                | -                | -         |    -2.75 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           14 |     3286 | 2024-04-02 | BOSS             | L   | 0.361      | -            | -                | -                | -         |    -4.55 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           13 |     3370 | 2024-03-27 | M80              | L   | 0.322      | -            | -                | -                | -         |    -0.64 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           12 |     3375 | 2024-03-27 | M80              | L   | 0.322      | -            | -                | -                | -         |    -0.64 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           11 |     3496 | 2024-03-20 | LAG              | W   | 0.276      | 0.477        | 0.012 (0.002)    | 0.364 (0.048)    | -         |     5.80 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|           10 |     3498 | 2024-03-20 | LAG              | L   | 0.275      | -            | -                | -                | -         |    -2.92 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|            9 |     3512 | 2024-03-19 | Party Astronauts | L   | 0.270      | -            | -                | -                | -         |    -2.05 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|            8 |     3515 | 2024-03-19 | Party Astronauts | L   | 0.269      | -            | -                | -                | -         |    -2.08 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|            7 |     3610 | 2024-03-14 | Wildcard         | L   | 0.235      | -            | -                | -                | -         |    -2.00 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            6 |     3612 | 2024-03-14 | Wildcard         | L   | 0.235      | -            | -                | -                | -         |    -2.03 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            5 |     3642 | 2024-03-13 | Mythic           | W   | 0.229      | -            | -                | -                | -         |     4.10 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            4 |     3683 | 2024-03-12 | bubibabu         | W   | 0.222      | -            | -                | -                | -         |     0.92 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            3 |     4109 | 2024-02-22 | MIGHT            | L   | 0.095      | -            | -                | -                | -         |    -2.29 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            2 |     4352 | 2024-02-13 | Take Flyte       | L   | 0.036      | -            | -                | -                | -         |    -0.61 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            1 |     4355 | 2024-02-13 | Take Flyte       | W   | 0.036      | -            | -                | -                | -         |     0.52 | BeaKie, CoJoMo, Gabe, mds, shutout        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,305.34)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
