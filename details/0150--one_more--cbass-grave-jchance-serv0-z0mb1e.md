### Roster Details<br />
Team Name: One More<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [150](../standings_global.md)<br />
Regional Rank: [41]( ../standings_americas.md)<br />
Final Rank Value:  722.5<br />
<br />
Final Rank Value (722.5) = Starting Rank Value (735.2) + Head To Head Adjustments (-12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 735.2
- 400 + ( ( 0.159 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 735.2


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
|           31 |      170 | 2024-06-15 | OMiT             | W   | 1.000      | 0.143        | 0.024 (0.003)    | 0.332 (0.047)    | 0 (0.000) |    21.66 | cbass, Grave, jchancE, serv0, z0mb1e |
|           30 |      205 | 2024-06-14 | E-Xolos LAZER    | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.282 (0.040)    | 0 (0.000) |    20.26 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |      961 | 2024-05-22 | Wildcard         | L   | 0.869      | -            | -                | -                | -         |    -3.70 | cbass, Grave, jchancE, serv0, z0mb1e |
|           28 |      965 | 2024-05-22 | Wildcard         | L   | 0.869      | -            | -                | -                | -         |    -3.84 | cbass, Grave, jchancE, serv0, z0mb1e |
|           27 |     1011 | 2024-05-21 | Elevate          | L   | 0.862      | -            | -                | -                | -         |    -3.43 | cbass, Champ, jchancE, serv0, z0mb1e |
|           26 |     1015 | 2024-05-21 | Elevate          | L   | 0.862      | -            | -                | -                | -         |    -3.54 | cbass, Champ, jchancE, serv0, z0mb1e |
|           25 |     1048 | 2024-05-20 | MIGHT            | W   | 0.856      | 0.477        | 0.000 (0.000)    | 0.089 (0.036)    | 0 (0.000) |     8.82 | cbass, Grave, jchancE, serv0, z0mb1e |
|           24 |     1053 | 2024-05-20 | MIGHT            | L   | 0.855      | -            | -                | -                | -         |   -18.59 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     1177 | 2024-05-16 | Carpe Diem       | L   | 0.829      | -            | -                | -                | -         |    -8.92 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     1178 | 2024-05-16 | Carpe Diem       | L   | 0.829      | -            | -                | -                | -         |    -9.54 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     1218 | 2024-05-15 | M80              | L   | 0.822      | -            | -                | -                | -         |    -1.17 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     1224 | 2024-05-15 | M80              | L   | 0.822      | -            | -                | -                | -         |    -1.18 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     1270 | 2024-05-14 | NRG              | L   | 0.816      | -            | -                | -                | -         |    -5.25 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     1276 | 2024-05-14 | NRG              | L   | 0.815      | -            | -                | -                | -         |    -5.51 | cbass, Grave, jchancE, serv0, z0mb1e |
|           17 |     1755 | 2024-04-23 | Nouns            | W   | 0.676      | 0.477        | 0.086 (0.028)    | 0.484 (0.156)    | 0 (0.000) |    17.87 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     1757 | 2024-04-23 | Nouns            | L   | 0.675      | -            | -                | -                | -         |    -3.29 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     2095 | 2024-04-10 | FLUFFY AIMERS    | W   | 0.589      | 0.477        | 0.016 (0.004)    | 0.297 (0.083)    | 0 (0.000) |    12.03 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     2100 | 2024-04-10 | FLUFFY AIMERS    | L   | 0.589      | -            | -                | -                | -         |    -6.58 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     2152 | 2024-04-09 | Party Astronauts | L   | 0.582      | -            | -                | -                | -         |    -3.00 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     2159 | 2024-04-09 | Party Astronauts | L   | 0.582      | -            | -                | -                | -         |    -3.08 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     2284 | 2024-04-04 | Limitless        | W   | 0.549      | 0.477        | 0.002 (0.000)    | 0.225 (0.059)    | 0 (0.000) |     8.01 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     2289 | 2024-04-04 | Limitless        | L   | 0.549      | -            | -                | -                | -         |    -9.50 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     2460 | 2024-03-27 | BOSS             | L   | 0.496      | -            | -                | -                | -         |    -5.76 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     2464 | 2024-03-27 | BOSS             | W   | 0.496      | 0.477        | 0.021 (0.005)    | 0.349 (0.083)    | 0 (0.000) |    10.11 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     2703 | 2024-03-14 | Mythic           | L   | 0.409      | -            | -                | -                | -         |    -4.19 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     2707 | 2024-03-14 | Mythic           | L   | 0.409      | -            | -                | -                | -         |    -4.32 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     2952 | 2024-03-05 | LAG              | L   | 0.349      | -            | -                | -                | -         |    -3.14 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     2954 | 2024-03-05 | LAG              | L   | 0.349      | -            | -                | -                | -         |    -3.22 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     3209 | 2024-02-22 | Party Astronauts | L   | 0.268      | -            | -                | -                | -         |    -1.63 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     3450 | 2024-02-13 | Take Flyte       | W   | 0.209      | 0.477        | 0.006 (0.001)    | 0.283 (0.028)    | 0 (0.000) |     3.81 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     3453 | 2024-02-13 | Take Flyte       | L   | 0.209      | -            | -                | -                | -         |    -2.82 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($791.30)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
