### Roster Details<br />
Team Name: Phoenix<br />
Roster: CoJoMo, Gabe, Louie, mds, shutout<br />
Global Rank: [171](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_04.md)<br />
Regional Rank: [46]( ../../standings_americas_2024_09_04.md)<br />
<br />
Final Rank Value:  655.1<br />
<br />
Final Rank Value (655.1) = Starting Rank Value (707.7) + Head To Head Adjustments (-52.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.7
- 400 + ( ( 0.155 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 707.7


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
|           50 |      298 | 2024-08-26 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |   -14.01 | CoJoMo, Gabe, Louie, mds, shutout         |
|           49 |      313 | 2024-08-26 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.20 | CoJoMo, Gabe, Louie, mds, shutout         |
|           48 |      679 | 2024-08-15 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.90 | CoJoMo, Gabe, Louie, mds, shutout         |
|           47 |      824 | 2024-08-11 | Revenge Nation   | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.116 (0.043)    | 0 (0.000) |    16.47 | CoJoMo, Gabe, Louie, mds, shutout         |
|           46 |      897 | 2024-08-08 | undefined        | L   | 1.000      | -            | -                | -                | -         |   -13.92 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           45 |     1075 | 2024-08-03 | DETONATE         | W   | 0.990      | 0.371        | -                | 0.111 (0.041)    | 0 (0.000) |    10.07 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           44 |     1439 | 2024-07-24 | Aether           | W   | 0.922      | -            | -                | -                | 0 (0.000) |     5.31 | CoJoMo, Gabe, mds, nooz, shutout          |
|           43 |     1557 | 2024-07-20 | Elevate          | L   | 0.895      | -            | -                | -                | -         |    -5.38 | CoJoMo, Gabe, mds, nooz, shutout          |
|           42 |     1691 | 2024-07-17 | Elevate          | L   | 0.876      | -            | -                | -                | -         |    -5.30 | CoJoMo, Gabe, mds, shutout, xaler         |
|           41 |     1695 | 2024-07-17 | Elevate          | L   | 0.876      | -            | -                | -                | -         |    -5.56 | CoJoMo, Gabe, mds, shutout, xaler         |
|           40 |     1755 | 2024-07-16 | Take Flyte       | L   | 0.869      | -            | -                | -                | -         |   -13.35 | CoJoMo, Gabe, mds, shutout, xaler         |
|           39 |     1761 | 2024-07-16 | Take Flyte       | L   | 0.869      | -            | -                | -                | -         |   -14.42 | CoJoMo, Gabe, mds, shutout, xaler         |
|           38 |     2110 | 2024-06-14 | Akimbo           | L   | 0.655      | -            | -                | -                | -         |    -9.88 | CoJoMo, Gabe, mds, shutout, xaler         |
|           37 |     2563 | 2024-06-04 | Mythic           | L   | 0.588      | -            | -                | -                | -         |    -7.60 | CoJoMo, Gabe, Louie, mds, shutout         |
|           36 |     2864 | 2024-05-22 | BOSS             | L   | 0.503      | -            | -                | -                | -         |    -7.19 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           35 |     2867 | 2024-05-22 | BOSS             | W   | 0.502      | 0.477        | 0.013 (0.003)    | 0.412 (0.099)    | 0 (0.000) |     8.85 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           34 |     2912 | 2024-05-21 | NRG              | W   | 0.496      | 0.477        | 0.031 (0.007)    | 0.590 (0.140)    | 0 (0.000) |    11.56 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           33 |     2914 | 2024-05-21 | NRG              | L   | 0.496      | -            | -                | -                | -         |    -4.07 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           32 |     2947 | 2024-05-20 | FLUFFY AIMERS    | L   | 0.489      | -            | -                | -                | -         |    -8.02 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           31 |     2952 | 2024-05-20 | FLUFFY AIMERS    | W   | 0.489      | 0.477        | 0.002 (0.001)    | 0.475 (0.111)    | 0 (0.000) |     7.55 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           30 |     3114 | 2024-05-15 | Mythic           | L   | 0.456      | -            | -                | -                | -         |    -6.18 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           29 |     3120 | 2024-05-15 | Mythic           | W   | 0.456      | 0.477        | 0.008 (0.002)    | 0.289 (0.063)    | 0 (0.000) |     8.38 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           28 |     3182 | 2024-05-14 | Elevate          | L   | 0.449      | -            | -                | -                | -         |    -3.16 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           27 |     3186 | 2024-05-14 | Elevate          | L   | 0.448      | -            | -                | -                | -         |    -3.25 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           26 |     3238 | 2024-05-12 | NRG              | L   | 0.436      | -            | -                | -                | -         |    -3.99 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           25 |     3245 | 2024-05-12 | Mythic           | W   | 0.434      | 0.270        | 0.008 (0.001)    | 0.289 (0.034)    | 0 (0.000) |     8.03 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           24 |     3266 | 2024-05-11 | BOSS             | W   | 0.428      | 0.270        | 0.013 (0.001)    | 0.412 (0.048)    | 0 (0.000) |     8.24 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           23 |     3270 | 2024-05-11 | NRG              | L   | 0.428      | -            | -                | -                | -         |    -3.92 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           22 |     3274 | 2024-05-11 | Party Astronauts | W   | 0.427      | 0.270        | 0.034 (0.004)    | 0.500 (0.058)    | 0 (0.000) |    10.09 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           21 |     3334 | 2024-05-08 | Nouns            | L   | 0.409      | -            | -                | -                | -         |    -3.13 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           20 |     3336 | 2024-05-08 | Nouns            | L   | 0.409      | -            | -                | -                | -         |    -3.21 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           19 |     3845 | 2024-04-17 | Nouns            | L   | 0.268      | -            | -                | -                | -         |    -2.07 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           18 |     3996 | 2024-04-10 | MIGHT            | L   | 0.223      | -            | -                | -                | -         |    -5.44 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           17 |     4003 | 2024-04-10 | MIGHT            | W   | 0.222      | -            | -                | -                | -         |     1.59 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           16 |     4180 | 2024-04-04 | Carpe Diem       | W   | 0.183      | 0.477        | 0.004 (0.000)    | -                | -         |     2.86 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           15 |     4186 | 2024-04-04 | Carpe Diem       | W   | 0.182      | 0.477        | 0.004 (0.000)    | -                | -         |     2.90 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           14 |     4228 | 2024-04-03 | Limitless        | W   | 0.176      | -            | -                | -                | -         |     2.20 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           13 |     4231 | 2024-04-03 | Limitless        | W   | 0.176      | -            | -                | -                | -         |     2.23 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           12 |     4278 | 2024-04-02 | Party Astronauts | L   | 0.170      | -            | -                | -                | -         |    -1.43 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           11 |     4282 | 2024-04-02 | BOSS             | L   | 0.168      | -            | -                | -                | -         |    -2.04 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           10 |     4366 | 2024-03-27 | M80              | L   | 0.129      | -            | -                | -                | -         |    -0.38 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            9 |     4371 | 2024-03-27 | M80              | L   | 0.129      | -            | -                | -                | -         |    -0.38 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            8 |     4492 | 2024-03-20 | LAG              | W   | 0.083      | 0.477        | -                | 0.387 (0.015)    | -         |     1.55 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|            7 |     4494 | 2024-03-20 | LAG              | L   | 0.082      | -            | -                | -                | -         |    -1.06 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|            6 |     4508 | 2024-03-19 | Party Astronauts | L   | 0.077      | -            | -                | -                | -         |    -0.65 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|            5 |     4511 | 2024-03-19 | Party Astronauts | L   | 0.076      | -            | -                | -                | -         |    -0.65 | BeaKie, CoJoMo, Gabe, mds, X-23           |
|            4 |     4606 | 2024-03-14 | Wildcard         | L   | 0.042      | -            | -                | -                | -         |    -0.27 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            3 |     4608 | 2024-03-14 | Wildcard         | L   | 0.042      | -            | -                | -                | -         |    -0.27 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            2 |     4638 | 2024-03-13 | Mythic           | W   | 0.036      | -            | -                | -                | -         |     0.67 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            1 |     4679 | 2024-03-12 | bubibabu         | W   | 0.029      | -            | -                | -                | -         |     0.14 | BeaKie, CoJoMo, Gabe, mds, shutout        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($996.54)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
