### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [149](../standings_global.md)<br />
Regional Rank: [40]( ../standings_americas.md)<br />
Final Rank Value:  708.9<br />
<br />
Final Rank Value (708.9) = Starting Rank Value (722.6) + Head To Head Adjustments (-13.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 722.6
- 400 + ( ( 0.159 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 722.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      182 | 2024-07-18 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -5.06 | cbass, Grave, jchancE, serv0, z0mb1e |
|           38 |      187 | 2024-07-18 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -5.31 | cbass, Grave, jchancE, serv0, z0mb1e |
|           37 |      244 | 2024-07-17 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.05 | cbass, Grave, jchancE, serv0, z0mb1e |
|           36 |      248 | 2024-07-17 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.30 | cbass, Grave, jchancE, serv0, z0mb1e |
|           35 |      309 | 2024-07-16 | Perseverance     | W   | 1.000      | 0.477        | 0.005 (0.002)    | 0.243 (0.116)    | 0 (0.000) |    15.72 | cbass, Grave, jchancE, serv0, z0mb1e |
|           34 |      315 | 2024-07-16 | Perseverance     | W   | 1.000      | 0.477        | 0.005 (0.002)    | 0.243 (0.116)    | 0 (0.000) |    17.17 | cbass, Grave, jchancE, serv0, z0mb1e |
|           33 |      362 | 2024-07-15 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -4.56 | cbass, Grave, jchancE, serv0, z0mb1e |
|           32 |      367 | 2024-07-15 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -4.77 | cbass, Grave, jchancE, serv0, z0mb1e |
|           31 |      622 | 2024-06-15 | OMiT             | W   | 0.943      | 0.143        | 0.020 (0.003)    | 0.297 (0.040)    | 0 (0.000) |    19.56 | cbass, Grave, jchancE, serv0, z0mb1e |
|           30 |      657 | 2024-06-14 | E-Xolos LAZER    | W   | 0.936      | 0.143        | 0.013 (0.002)    | 0.301 (0.040)    | 0 (0.000) |    19.26 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |     1413 | 2024-05-22 | Wildcard         | L   | 0.782      | -            | -                | -                | -         |    -3.53 | cbass, Grave, jchancE, serv0, z0mb1e |
|           28 |     1417 | 2024-05-22 | Wildcard         | L   | 0.782      | -            | -                | -                | -         |    -3.65 | cbass, Grave, jchancE, serv0, z0mb1e |
|           27 |     1463 | 2024-05-21 | Elevate          | L   | 0.776      | -            | -                | -                | -         |    -3.35 | cbass, Champ, jchancE, serv0, z0mb1e |
|           26 |     1467 | 2024-05-21 | Elevate          | L   | 0.775      | -            | -                | -                | -         |    -3.46 | cbass, Champ, jchancE, serv0, z0mb1e |
|           25 |     1500 | 2024-05-20 | MIGHT            | W   | 0.769      | 0.477        | 0.000 (0.000)    | 0.073 (0.027)    | 0 (0.000) |     7.58 | cbass, Grave, jchancE, serv0, z0mb1e |
|           24 |     1505 | 2024-05-20 | MIGHT            | L   | 0.769      | -            | -                | -                | -         |   -17.08 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     1629 | 2024-05-16 | Limitless        | L   | 0.742      | -            | -                | -                | -         |    -7.98 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     1630 | 2024-05-16 | Limitless        | L   | 0.742      | -            | -                | -                | -         |    -8.47 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     1670 | 2024-05-15 | M80              | L   | 0.735      | -            | -                | -                | -         |    -0.75 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     1676 | 2024-05-15 | M80              | L   | 0.735      | -            | -                | -                | -         |    -0.75 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     1722 | 2024-05-14 | NRG              | L   | 0.729      | -            | -                | -                | -         |    -5.25 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     1728 | 2024-05-14 | NRG              | L   | 0.729      | -            | -                | -                | -         |    -5.49 | cbass, Grave, jchancE, serv0, z0mb1e |
|           17 |     2207 | 2024-04-23 | Nouns            | W   | 0.589      | 0.477        | 0.073 (0.021)    | 0.589 (0.165)    | 0 (0.000) |    14.87 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     2209 | 2024-04-23 | Nouns            | L   | 0.589      | -            | -                | -                | -         |    -3.62 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     2547 | 2024-04-10 | FLUFFY AIMERS    | W   | 0.502      | 0.477        | 0.013 (0.003)    | 0.125 (0.030)    | 0 (0.000) |     9.52 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     2552 | 2024-04-10 | FLUFFY AIMERS    | L   | 0.502      | -            | -                | -                | -         |    -6.40 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     2604 | 2024-04-09 | Party Astronauts | L   | 0.496      | -            | -                | -                | -         |    -3.02 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     2611 | 2024-04-09 | Party Astronauts | L   | 0.495      | -            | -                | -                | -         |    -3.11 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     2736 | 2024-04-04 | Limitless        | W   | 0.462      | 0.477        | 0.001 (0.000)    | 0.196 (0.043)    | 0 (0.000) |     6.41 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     2741 | 2024-04-04 | Limitless        | L   | 0.462      | -            | -                | -                | -         |    -8.34 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     2912 | 2024-03-27 | BOSS             | L   | 0.409      | -            | -                | -                | -         |    -4.62 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     2916 | 2024-03-27 | BOSS             | W   | 0.409      | 0.477        | 0.018 (0.004)    | 0.378 (0.074)    | 0 (0.000) |     8.46 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     3155 | 2024-03-14 | Mythic           | L   | 0.322      | -            | -                | -                | -         |    -3.77 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     3159 | 2024-03-14 | Mythic           | L   | 0.322      | -            | -                | -                | -         |    -3.87 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     3404 | 2024-03-05 | LAG              | L   | 0.263      | -            | -                | -                | -         |    -2.35 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     3406 | 2024-03-05 | LAG              | L   | 0.262      | -            | -                | -                | -         |    -2.39 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     3661 | 2024-02-22 | Party Astronauts | L   | 0.181      | -            | -                | -                | -         |    -1.26 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     3902 | 2024-02-13 | Perseverance     | W   | 0.123      | 0.477        | 0.005 (0.000)    | 0.243 (0.014)    | 0 (0.000) |     2.10 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     3905 | 2024-02-13 | Perseverance     | L   | 0.122      | -            | -                | -                | -         |    -1.77 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($721.83)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
