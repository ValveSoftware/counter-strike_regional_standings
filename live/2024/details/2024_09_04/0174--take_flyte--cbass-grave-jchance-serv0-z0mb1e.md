### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Global Rank: [174](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_04.md)<br />
Regional Rank: [47]( ../../standings_americas_2024_09_04.md)<br />
<br />
Final Rank Value:  650.5<br />
<br />
Final Rank Value (650.5) = Starting Rank Value (698.0) + Head To Head Adjustments (-47.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.0
- 400 + ( ( 0.150 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 698.0


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
|           45 |      246 | 2024-08-27 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -3.73 | cbass, Grave, jchancE, serv0, z0mb1e |
|           44 |      297 | 2024-08-26 | LAG              | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.387 (0.055)    | 0 (0.000) |    17.37 | cbass, Champ, jchancE, serv0, z0mb1e |
|           43 |      926 | 2024-08-07 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.86 | cbass, Grave, jchancE, serv0, z0mb1e |
|           42 |      928 | 2024-08-07 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -6.18 | cbass, Grave, jchancE, serv0, z0mb1e |
|           41 |      980 | 2024-08-06 | BOSS             | W   | 1.000      | 0.477        | 0.013 (0.006)    | 0.412 (0.197)    | 0 (0.000) |    21.29 | cbass, Grave, jchancE, serv0, z0mb1e |
|           40 |      984 | 2024-08-06 | BOSS             | L   | 1.000      | -            | -                | -                | -         |    -9.79 | cbass, Grave, jchancE, serv0, z0mb1e |
|           39 |     1042 | 2024-08-04 | Final Form       | L   | 0.997      | -            | -                | -                | -         |   -19.63 | cbass, Grave, jchancE, serv0, z0mb1e |
|           38 |     1081 | 2024-08-03 | Wildcard         | L   | 0.989      | -            | -                | -                | -         |    -3.63 | cbass, Champ, jchancE, serv0, z0mb1e |
|           37 |     1184 | 2024-07-31 | Revenge Nation   | L   | 0.970      | -            | -                | -                | -         |   -13.60 | cbass, Grave, jchancE, serv0, z0mb1e |
|           36 |     1189 | 2024-07-31 | Revenge Nation   | L   | 0.969      | -            | -                | -                | -         |   -14.80 | cbass, Grave, jchancE, serv0, z0mb1e |
|           35 |     1431 | 2024-07-24 | InControl        | W   | 0.923      | 0.371        | -                | 0.114 (0.039)    | 0 (0.000) |     8.23 | cbass, Grave, jchancE, serv0, z0mb1e |
|           34 |     1628 | 2024-07-18 | Wildcard         | L   | 0.883      | -            | -                | -                | -         |    -4.93 | cbass, Grave, jchancE, serv0, z0mb1e |
|           33 |     1633 | 2024-07-18 | Wildcard         | L   | 0.882      | -            | -                | -                | -         |    -5.16 | cbass, Grave, jchancE, serv0, z0mb1e |
|           32 |     1690 | 2024-07-17 | Party Astronauts | L   | 0.876      | -            | -                | -                | -         |    -5.64 | cbass, Grave, jchancE, serv0, z0mb1e |
|           31 |     1694 | 2024-07-17 | Party Astronauts | L   | 0.876      | -            | -                | -                | -         |    -5.93 | cbass, Grave, jchancE, serv0, z0mb1e |
|           30 |     1755 | 2024-07-16 | Phoenix          | W   | 0.869      | 0.477        | 0.003 (0.001)    | 0.226 (0.094)    | 0 (0.000) |    13.35 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |     1761 | 2024-07-16 | Phoenix          | W   | 0.869      | 0.477        | 0.003 (0.001)    | 0.226 (0.094)    | 0 (0.000) |    14.42 | cbass, Grave, jchancE, serv0, z0mb1e |
|           28 |     1808 | 2024-07-15 | Nouns            | L   | 0.863      | -            | -                | -                | -         |    -4.88 | cbass, Grave, jchancE, serv0, z0mb1e |
|           27 |     1813 | 2024-07-15 | Nouns            | L   | 0.862      | -            | -                | -                | -         |    -5.11 | cbass, Grave, jchancE, serv0, z0mb1e |
|           26 |     2068 | 2024-06-15 | Akimbo           | W   | 0.663      | 0.143        | 0.010 (0.001)    | 0.300 (0.028)    | 0 (0.000) |    12.10 | cbass, Grave, jchancE, serv0, z0mb1e |
|           25 |     2103 | 2024-06-14 | E-Xolos LAZER    | W   | 0.656      | 0.143        | 0.008 (0.001)    | 0.472 (0.044)    | 0 (0.000) |    13.71 | cbass, Grave, jchancE, serv0, z0mb1e |
|           24 |     2859 | 2024-05-22 | Wildcard         | L   | 0.503      | -            | -                | -                | -         |    -2.43 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     2863 | 2024-05-22 | Wildcard         | L   | 0.503      | -            | -                | -                | -         |    -2.48 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     2909 | 2024-05-21 | Elevate          | L   | 0.496      | -            | -                | -                | -         |    -2.81 | cbass, Champ, jchancE, serv0, z0mb1e |
|           21 |     2913 | 2024-05-21 | Elevate          | L   | 0.496      | -            | -                | -                | -         |    -2.88 | cbass, Champ, jchancE, serv0, z0mb1e |
|           20 |     2946 | 2024-05-20 | MIGHT            | W   | 0.489      | -            | -                | -                | 0 (0.000) |     4.25 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     2951 | 2024-05-20 | MIGHT            | L   | 0.489      | -            | -                | -                | -         |   -11.42 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     3075 | 2024-05-16 | Carpe Diem       | L   | 0.463      | -            | -                | -                | -         |    -6.21 | cbass, Grave, jchancE, serv0, z0mb1e |
|           17 |     3076 | 2024-05-16 | Carpe Diem       | L   | 0.462      | -            | -                | -                | -         |    -6.46 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     3116 | 2024-05-15 | M80              | L   | 0.456      | -            | -                | -                | -         |    -1.06 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     3122 | 2024-05-15 | M80              | L   | 0.456      | -            | -                | -                | -         |    -1.07 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     3168 | 2024-05-14 | NRG              | L   | 0.449      | -            | -                | -                | -         |    -3.56 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     3174 | 2024-05-14 | NRG              | L   | 0.449      | -            | -                | -                | -         |    -3.67 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     3653 | 2024-04-23 | Nouns            | W   | 0.309      | 0.477        | 0.056 (0.008)    | 0.535 (0.079)    | 0 (0.000) |     7.51 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     3655 | 2024-04-23 | Nouns            | L   | 0.309      | -            | -                | -                | -         |    -2.25 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     3993 | 2024-04-10 | FLUFFY AIMERS    | W   | 0.223      | 0.477        | 0.006 (0.001)    | -                | 0 (0.000) |     3.51 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     3998 | 2024-04-10 | FLUFFY AIMERS    | L   | 0.223      | -            | -                | -                | -         |    -3.56 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     4050 | 2024-04-09 | Party Astronauts | L   | 0.216      | -            | -                | -                | -         |    -1.72 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     4057 | 2024-04-09 | Party Astronauts | L   | 0.216      | -            | -                | -                | -         |    -1.75 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     4182 | 2024-04-04 | Limitless        | W   | 0.183      | 0.477        | 0.001 (0.000)    | 0.101 (0.009)    | -         |     2.37 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     4187 | 2024-04-04 | Limitless        | L   | 0.182      | -            | -                | -                | -         |    -3.42 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     4358 | 2024-03-27 | BOSS             | L   | 0.130      | -            | -                | -                | -         |    -1.54 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     4362 | 2024-03-27 | BOSS             | W   | 0.129      | 0.477        | 0.013 (0.001)    | 0.412 (0.025)    | -         |     2.56 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     4601 | 2024-03-14 | Mythic           | L   | 0.043      | -            | -                | -                | -         |    -0.53 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4605 | 2024-03-14 | Mythic           | L   | 0.043      | -            | -                | -                | -         |    -0.53 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($498.27)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
