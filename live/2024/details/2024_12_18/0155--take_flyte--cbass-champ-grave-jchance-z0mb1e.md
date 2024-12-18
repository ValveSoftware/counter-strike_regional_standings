### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Champ, Grave, jchancE, z0mb1e<br />
Global Rank: [155](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_18.md)<br />
Regional Rank: [40]( ../../standings_americas_2024_12_18.md)<br />
<br />
Final Rank Value:  709.8<br />
<br />
Final Rank Value (709.8) = Starting Rank Value (772.0) + Head To Head Adjustments (-62.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.212[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.0
- 400 + ( ( 0.194 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 772.0


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
|           47 |       26 | 2024-12-15 | Alter Iron       | L   | 1.000      | -            | -                | -                | -         |   -15.32 | cbass, Champ, Grave, jchancE, z0mb1e |
|           46 |       49 | 2024-12-14 | Undone           | L   | 1.000      | -            | -                | -                | -         |   -11.43 | cbass, Champ, Grave, jchancE, z0mb1e |
|           45 |       78 | 2024-12-13 | LAG              | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.141 (0.020)    | 0 (0.000) |    10.70 | cbass, Champ, Grave, jchancE, z0mb1e |
|           44 |       98 | 2024-12-12 | Wanted Goons     | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.041 (0.006)    | 0 (0.000) |    11.62 | cbass, Champ, Grave, jchancE, z0mb1e |
|           43 |      113 | 2024-12-11 | Undone           | L   | 1.000      | -            | -                | -                | -         |   -11.94 | cbass, Champ, Grave, jchancE, z0mb1e |
|           42 |      125 | 2024-12-10 | Wanted Goons     | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.041 (0.006)    | 0 (0.000) |    12.11 | cbass, Champ, Grave, jchancE, z0mb1e |
|           41 |      174 | 2024-12-07 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -9.46 | cbass, Champ, Grave, jchancE, z0mb1e |
|           40 |      179 | 2024-12-07 | Sharks           | L   | 1.000      | -            | -                | -                | -         |    -3.14 | cbass, Champ, Grave, jchancE, z0mb1e |
|           39 |      209 | 2024-12-06 | Not Mythic       | W   | 1.000      | 0.384        | 0.000 (0.000)    | -                | 1 (1.000) |     6.48 | cbass, Champ, Grave, jchancE, z0mb1e |
|           38 |     1397 | 2024-10-09 | LAG              | L   | 0.736      | -            | -                | -                | -         |   -15.40 | cbass, Champ, Grave, jchancE, z0mb1e |
|           37 |     1402 | 2024-10-09 | LAG              | W   | 0.736      | 0.477        | 0.003 (0.001)    | 0.141 (0.050)    | 0 (0.000) |     7.74 | cbass, Champ, Grave, jchancE, z0mb1e |
|           36 |     1435 | 2024-10-08 | E-Xolos LAZER    | L   | 0.729      | -            | -                | -                | -         |   -10.35 | cbass, Champ, Grave, jchancE, z0mb1e |
|           35 |     1442 | 2024-10-08 | E-Xolos LAZER    | L   | 0.729      | -            | -                | -                | -         |   -11.04 | cbass, Champ, Grave, jchancE, z0mb1e |
|           34 |     1595 | 2024-10-03 | Mythic           | W   | 0.696      | 0.477        | 0.000 (0.000)    | 0.138 (0.046)    | 0 (0.000) |     6.61 | cbass, Champ, Grave, jchancE, z0mb1e |
|           33 |     1602 | 2024-10-03 | Mythic           | W   | 0.695      | 0.477        | -                | 0.138 (0.046)    | 0 (0.000) |     6.97 | cbass, Champ, Grave, jchancE, z0mb1e |
|           32 |     1674 | 2024-10-01 | vagrants         | L   | 0.682      | -            | -                | -                | -         |   -11.32 | cbass, Champ, Grave, jchancE, z0mb1e |
|           31 |     1679 | 2024-10-01 | vagrants         | W   | 0.682      | 0.477        | 0.004 (0.001)    | 0.203 (0.066)    | 0 (0.000) |    10.34 | cbass, Champ, Grave, jchancE, z0mb1e |
|           30 |     1770 | 2024-09-28 | M80              | L   | 0.662      | -            | -                | -                | -         |    -1.08 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |     1771 | 2024-09-28 | M80              | L   | 0.662      | -            | -                | -                | -         |    -1.09 | cbass, Champ, Grave, jchancE, z0mb1e |
|           28 |     1902 | 2024-09-25 | Legacy           | L   | 0.642      | -            | -                | -                | -         |    -2.88 | cbass, Champ, Grave, jchancE, z0mb1e |
|           27 |     1907 | 2024-09-25 | Legacy           | L   | 0.642      | -            | -                | -                | -         |    -2.96 | cbass, Champ, Grave, jchancE, z0mb1e |
|           26 |     2146 | 2024-09-18 | NRG              | L   | 0.596      | -            | -                | -                | -         |    -1.59 | cbass, Champ, Grave, jchancE, z0mb1e |
|           25 |     2149 | 2024-09-18 | NRG              | L   | 0.595      | -            | -                | -                | -         |    -1.62 | cbass, Champ, Grave, jchancE, z0mb1e |
|           24 |     2437 | 2024-09-08 | timbermen        | L   | 0.528      | -            | -                | -                | -         |    -4.98 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     2455 | 2024-09-07 | Wanted Goons     | W   | 0.522      | -            | -                | -                | 1 (0.522) |     3.90 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     2470 | 2024-09-07 | Amped Red        | W   | 0.520      | -            | -                | -                | 1 (0.520) |     2.04 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     2561 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.502      | -            | -                | -                | -         |    -4.75 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     2565 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.502      | -            | -                | -                | -         |    -4.93 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     2823 | 2024-08-27 | Legacy           | L   | 0.448      | -            | -                | -                | -         |    -3.19 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     2874 | 2024-08-26 | LAG              | W   | 0.442      | 0.143        | 0.003 (0.000)    | 0.141 (0.009)    | -         |     5.39 | cbass, Champ, jchancE, serv0, z0mb1e |
|           17 |     3503 | 2024-08-07 | timbermen        | L   | 0.316      | -            | -                | -                | -         |    -3.19 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     3505 | 2024-08-07 | timbermen        | L   | 0.315      | -            | -                | -                | -         |    -3.27 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     3557 | 2024-08-06 | BOSS             | W   | 0.309      | 0.477        | 0.036 (0.005)    | 0.460 (0.068)    | -         |     8.28 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     3561 | 2024-08-06 | BOSS             | L   | 0.309      | -            | -                | -                | -         |    -1.45 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     3619 | 2024-08-04 | Final Form       | L   | 0.296      | -            | -                | -                | -         |    -6.34 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     3658 | 2024-08-03 | Wildcard         | L   | 0.288      | -            | -                | -                | -         |    -0.43 | cbass, Champ, jchancE, serv0, z0mb1e |
|           11 |     3761 | 2024-07-31 | Revenge Nation   | L   | 0.269      | -            | -                | -                | -         |    -4.92 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     3766 | 2024-07-31 | Revenge Nation   | L   | 0.269      | -            | -                | -                | -         |    -5.03 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     4008 | 2024-07-24 | InControl        | W   | 0.223      | 0.371        | 0.006 (0.001)    | 0.087 (0.007)    | -         |     2.38 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     4205 | 2024-07-18 | Wildcard         | L   | 0.182      | -            | -                | -                | -         |    -0.29 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     4210 | 2024-07-18 | Wildcard         | L   | 0.182      | -            | -                | -                | -         |    -0.29 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     4267 | 2024-07-17 | Party Astronauts | L   | 0.176      | -            | -                | -                | -         |    -1.74 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     4271 | 2024-07-17 | Party Astronauts | L   | 0.175      | -            | -                | -                | -         |    -1.76 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     4332 | 2024-07-16 | USA              | W   | 0.169      | -            | -                | -                | -         |     0.91 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     4338 | 2024-07-16 | USA              | W   | 0.169      | -            | -                | -                | -         |     0.92 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     4385 | 2024-07-15 | Nouns            | L   | 0.162      | -            | -                | -                | -         |    -0.67 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4390 | 2024-07-15 | Nouns            | L   | 0.162      | -            | -                | -                | -         |    -0.67 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($852.64)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.809 | $400.00        | $323.47         |
| 2024-09-08 |      0.529 | $1,000.00      | $529.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
