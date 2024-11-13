### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Champ, Grave, jchancE, z0mb1e<br />
Global Rank: [142](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_13.md)<br />
Regional Rank: [38]( ../../standings_americas_2024_11_13.md)<br />
<br />
Final Rank Value:  720.4<br />
<br />
Final Rank Value (720.4) = Starting Rank Value (784.3) + Head To Head Adjustments (-63.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 784.3
- 400 + ( ( 0.192 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 784.3


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
|           46 |      688 | 2024-10-09 | LAG              | L   | 0.969      | -            | -                | -                | -         |   -19.11 | cbass, Champ, Grave, jchancE, z0mb1e |
|           45 |      693 | 2024-10-09 | LAG              | W   | 0.969      | 0.477        | 0.003 (0.002)    | 0.220 (0.102)    | 0 (0.000) |    11.14 | cbass, Champ, Grave, jchancE, z0mb1e |
|           44 |      726 | 2024-10-08 | E-Xolos LAZER    | L   | 0.962      | -            | -                | -                | -         |   -11.91 | cbass, Champ, Grave, jchancE, z0mb1e |
|           43 |      733 | 2024-10-08 | E-Xolos LAZER    | L   | 0.962      | -            | -                | -                | -         |   -12.93 | cbass, Champ, Grave, jchancE, z0mb1e |
|           42 |      886 | 2024-10-03 | Mythic           | W   | 0.929      | 0.477        | 0.001 (0.001)    | 0.190 (0.084)    | 0 (0.000) |    12.77 | cbass, Champ, Grave, jchancE, z0mb1e |
|           41 |      893 | 2024-10-03 | Mythic           | W   | 0.929      | 0.477        | 0.001 (0.001)    | 0.190 (0.084)    | 0 (0.000) |    13.86 | cbass, Champ, Grave, jchancE, z0mb1e |
|           40 |      965 | 2024-10-01 | Limitless        | L   | 0.916      | -            | -                | -                | -         |   -15.19 | cbass, Champ, Grave, jchancE, z0mb1e |
|           39 |      970 | 2024-10-01 | Limitless        | W   | 0.915      | 0.477        | 0.004 (0.002)    | 0.258 (0.113)    | 0 (0.000) |    13.69 | cbass, Champ, Grave, jchancE, z0mb1e |
|           38 |     1061 | 2024-09-28 | M80              | L   | 0.896      | -            | -                | -                | -         |    -0.82 | cbass, Grave, jchancE, serv0, z0mb1e |
|           37 |     1062 | 2024-09-28 | M80              | L   | 0.895      | -            | -                | -                | -         |    -0.83 | cbass, Champ, Grave, jchancE, z0mb1e |
|           36 |     1193 | 2024-09-25 | Legacy           | L   | 0.876      | -            | -                | -                | -         |    -2.76 | cbass, Champ, Grave, jchancE, z0mb1e |
|           35 |     1198 | 2024-09-25 | Legacy           | L   | 0.875      | -            | -                | -                | -         |    -2.84 | cbass, Champ, Grave, jchancE, z0mb1e |
|           34 |     1437 | 2024-09-18 | NRG              | L   | 0.829      | -            | -                | -                | -         |    -4.38 | cbass, Champ, Grave, jchancE, z0mb1e |
|           33 |     1440 | 2024-09-18 | NRG              | L   | 0.829      | -            | -                | -                | -         |    -4.56 | cbass, Champ, Grave, jchancE, z0mb1e |
|           32 |     1728 | 2024-09-08 | timbermen        | L   | 0.762      | -            | -                | -                | -         |    -5.88 | cbass, Grave, jchancE, serv0, z0mb1e |
|           31 |     1746 | 2024-09-07 | Wanted Goons     | W   | 0.755      | -            | -                | -                | 1 (0.755) |     5.83 | cbass, Grave, jchancE, serv0, z0mb1e |
|           30 |     1761 | 2024-09-07 | Amped Red        | W   | 0.754      | -            | -                | -                | 1 (0.754) |     3.02 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |     1852 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.736      | -            | -                | -                | -         |    -8.94 | cbass, Grave, jchancE, serv0, z0mb1e |
|           28 |     1856 | 2024-09-04 | FLUFFY AIMERS    | L   | 0.735      | -            | -                | -                | -         |    -9.51 | cbass, Grave, jchancE, serv0, z0mb1e |
|           27 |     2114 | 2024-08-27 | Legacy           | L   | 0.682      | -            | -                | -                | -         |    -3.51 | cbass, Grave, jchancE, serv0, z0mb1e |
|           26 |     2165 | 2024-08-26 | LAG              | W   | 0.676      | 0.143        | 0.003 (0.000)    | 0.220 (0.021)    | 0 (0.000) |     9.98 | cbass, Champ, jchancE, serv0, z0mb1e |
|           25 |     2794 | 2024-08-07 | timbermen        | L   | 0.549      | -            | -                | -                | -         |    -4.20 | cbass, Grave, jchancE, serv0, z0mb1e |
|           24 |     2796 | 2024-08-07 | timbermen        | L   | 0.549      | -            | -                | -                | -         |    -4.36 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     2848 | 2024-08-06 | BOSS             | W   | 0.542      | 0.477        | 0.030 (0.008)    | 0.342 (0.088)    | 0 (0.000) |    11.69 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     2852 | 2024-08-06 | BOSS             | L   | 0.542      | -            | -                | -                | -         |    -5.43 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     2910 | 2024-08-04 | Final Form       | L   | 0.529      | -            | -                | -                | -         |   -10.82 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     2949 | 2024-08-03 | Wildcard         | L   | 0.521      | -            | -                | -                | -         |    -1.15 | cbass, Champ, jchancE, serv0, z0mb1e |
|           19 |     3052 | 2024-07-31 | Revenge Nation   | L   | 0.502      | -            | -                | -                | -         |    -8.44 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     3057 | 2024-07-31 | Revenge Nation   | L   | 0.502      | -            | -                | -                | -         |    -8.82 | cbass, Grave, jchancE, serv0, z0mb1e |
|           17 |     3299 | 2024-07-24 | InControl        | W   | 0.456      | 0.371        | 0.007 (0.001)    | 0.115 (0.019)    | 0 (0.000) |     5.01 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     3496 | 2024-07-18 | Wildcard         | L   | 0.416      | -            | -                | -                | -         |    -1.05 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     3501 | 2024-07-18 | Wildcard         | L   | 0.415      | -            | -                | -                | -         |    -1.06 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     3558 | 2024-07-17 | Party Astronauts | L   | 0.409      | -            | -                | -                | -         |    -4.69 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     3562 | 2024-07-17 | Party Astronauts | L   | 0.409      | -            | -                | -                | -         |    -4.85 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     3623 | 2024-07-16 | Penance          | W   | 0.402      | 0.477        | 0.001 (0.000)    | 0.085 (0.016)    | 0 (0.000) |     3.59 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     3629 | 2024-07-16 | Penance          | W   | 0.402      | 0.477        | -                | 0.085 (0.016)    | -         |     3.69 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     3676 | 2024-07-15 | Nouns            | L   | 0.396      | -            | -                | -                | -         |    -2.41 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     3681 | 2024-07-15 | Nouns            | L   | 0.395      | -            | -                | -                | -         |    -2.46 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     3936 | 2024-06-15 | Akimbo           | W   | 0.196      | 0.143        | 0.015 (0.000)    | -                | -         |     2.92 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     3971 | 2024-06-14 | E-Xolos LAZER    | W   | 0.189      | 0.143        | 0.008 (0.000)    | 0.349 (0.009)    | -         |     2.91 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     4727 | 2024-05-22 | Wildcard         | L   | 0.036      | -            | -                | -                | -         |    -0.08 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     4731 | 2024-05-22 | Wildcard         | L   | 0.036      | -            | -                | -                | -         |    -0.08 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     4777 | 2024-05-21 | timbermen        | L   | 0.029      | -            | -                | -                | -         |    -0.23 | cbass, Champ, jchancE, serv0, z0mb1e |
|            3 |     4781 | 2024-05-21 | timbermen        | L   | 0.029      | -            | -                | -                | -         |    -0.23 | cbass, Champ, jchancE, serv0, z0mb1e |
|            2 |     4814 | 2024-05-20 | MIGHT            | W   | 0.022      | -            | -                | -                | -         |     0.11 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4819 | 2024-05-20 | MIGHT            | L   | 0.022      | -            | -                | -                | -         |    -0.59 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,287.08)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $400.00        | $400.00         |
| 2024-09-08 |      0.762 | $1,000.00      | $762.48         |
| 2024-06-09 |      0.156 | $800.00        | $124.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
