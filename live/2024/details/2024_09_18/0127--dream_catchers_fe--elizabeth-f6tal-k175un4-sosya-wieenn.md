### Roster Details<br />
Team Name: dream catchers fe<br />
Roster: Elizabeth, f6tal, k175un4, sosya, wieenN<br />
Global Rank: [127](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [88]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  774.9<br />
<br />
Final Rank Value (774.9) = Starting Rank Value (717.8) + Head To Head Adjustments (57.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.8
- 400 + ( ( 0.162 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 717.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      112 | 2024-09-14 | Imperial fe | L   | 1.000      | -            | -                | -                | -         |    -7.90 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|           13 |      122 | 2024-09-14 | BIG EQUIPA  | W   | 1.000      | 0.294        | 0.012 (0.004)    | 0.091 (0.027)    | 0 (0.000) |    12.37 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|           12 |      168 | 2024-09-12 | HSG fe      | W   | 1.000      | 0.328        | 0.023 (0.008)    | 0.074 (0.024)    | 0 (0.000) |    15.48 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|           11 |      407 | 2024-09-04 | Imperial fe | L   | 1.000      | -            | -                | -                | -         |    -7.94 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|           10 |     1035 | 2024-08-18 | Spirit fe   | W   | 0.993      | 0.250        | 0.007 (0.002)    | 0.138 (0.034)    | 0 (0.000) |    10.90 | Elizabeth, k175un4, Margo, sosya, wieenN |
|            9 |     1404 | 2024-08-06 | HSG fe      | W   | 0.914      | 0.143        | 0.023 (0.003)    | 0.074 (0.010)    | 0 (0.000) |    14.78 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            8 |     1952 | 2024-07-21 | France fe   | W   | 0.807      | 0.294        | 0.006 (0.001)    | 0.089 (0.021)    | 0 (0.000) |    10.48 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            7 |     1958 | 2024-07-21 | Spirit fe   | W   | 0.806      | 0.294        | 0.007 (0.002)    | 0.138 (0.033)    | 0 (0.000) |    10.63 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            6 |     1990 | 2024-07-20 | BIG EQUIPA  | W   | 0.800      | 0.294        | 0.012 (0.003)    | 0.091 (0.022)    | 0 (0.000) |    12.51 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            5 |     2272 | 2024-07-14 | Insilio fe  | L   | 0.760      | -            | -                | -                | -         |   -13.01 | Elizabeth, f6tal, k175un4, t4tty, wieenN |
|            4 |     2400 | 2024-06-30 | YeYO        | W   | 0.668      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.20 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            3 |     2464 | 2024-06-16 | NIP Impact  | L   | 0.574      | -            | -                | -                | -         |    -9.75 | k175un4, sosya, Stormy, unknxwn, wieenN  |
|            2 |     4338 | 2024-04-14 | Spirit fe   | W   | 0.154      | 0.250        | 0.007 (0.000)    | 0.138 (0.005)    | 0 (0.000) |     2.13 | k175un4, sosya, Stormy, trigusha, wieenN |
|            1 |     4549 | 2024-04-07 | ENCE Athena | W   | 0.108      | 0.250        | 0.001 (0.000)    | 0.043 (0.001)    | 0 (0.000) |     1.20 | k175un4, sosya, Stormy, trigusha, wieenN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,387.86)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      0.993 | $750.00        | $745.10         |
| 2024-07-21 |      0.807 | $3,000.00      | $2,421.28       |
| 2024-07-14 |      0.762 | $500.00        | $380.80         |
| 2024-06-30 |      0.668 | $750.00        | $500.76         |
| 2024-06-16 |      0.574 | $250.00        | $143.50         |
| 2024-04-14 |      0.154 | $750.00        | $115.29         |
| 2024-04-07 |      0.108 | $750.00        | $81.12          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
