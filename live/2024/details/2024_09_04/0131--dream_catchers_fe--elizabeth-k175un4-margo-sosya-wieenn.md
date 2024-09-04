### Roster Details<br />
Team Name: dream catchers fe<br />
Roster: Elizabeth, k175un4, Margo, sosya, wieenN<br />
Global Rank: [131](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [92]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  758.7<br />
<br />
Final Rank Value (758.7) = Starting Rank Value (708.4) + Head To Head Adjustments (50.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.4
- 400 + ( ( 0.156 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 708.4


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
|           10 |      625 | 2024-08-18 | Spirit fe   | W   | 1.000      | 0.250        | 0.005 (0.001)    | 0.110 (0.027)    | 0 (0.000) |     9.79 | Elizabeth, k175un4, Margo, sosya, wieenN |
|            9 |      994 | 2024-08-06 | HSG fe      | W   | 1.000      | 0.143        | 0.024 (0.003)    | 0.081 (0.012)    | 0 (0.000) |    17.02 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            8 |     1542 | 2024-07-21 | France fe   | W   | 0.900      | 0.294        | 0.006 (0.001)    | 0.100 (0.027)    | 0 (0.000) |    12.04 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            7 |     1548 | 2024-07-21 | Spirit fe   | W   | 0.899      | 0.294        | 0.005 (0.001)    | 0.110 (0.029)    | 0 (0.000) |    10.56 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            6 |     1580 | 2024-07-20 | BIG EQUIPA  | W   | 0.893      | 0.294        | 0.013 (0.003)    | 0.113 (0.030)    | 0 (0.000) |    14.65 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            5 |     1862 | 2024-07-14 | CENSORED fe | L   | 0.853      | -            | -                | -                | -         |   -14.06 | Elizabeth, f6tal, k175un4, t4tty, wieenN |
|            4 |     1990 | 2024-06-30 | YeYO        | W   | 0.761      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.15 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            3 |     2054 | 2024-06-16 | NIP Impact  | L   | 0.667      | -            | -                | -                | -         |   -11.31 | k175un4, sosya, Stormy, unknxwn, wieenN  |
|            2 |     3928 | 2024-04-14 | Spirit fe   | W   | 0.247      | 0.250        | 0.005 (0.000)    | 0.110 (0.007)    | 0 (0.000) |     3.08 | k175un4, sosya, Stormy, trigusha, wieenN |
|            1 |     4139 | 2024-04-07 | ENCE Athena | W   | 0.201      | 0.250        | 0.001 (0.000)    | 0.050 (0.003)    | 0 (0.000) |     2.35 | k175un4, sosya, Stormy, trigusha, wieenN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,949.95)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      1.000 | $750.00        | $750.00         |
| 2024-07-21 |      0.900 | $3,000.00      | $2,699.88       |
| 2024-07-14 |      0.854 | $500.00        | $427.23         |
| 2024-06-30 |      0.761 | $750.00        | $570.41         |
| 2024-06-16 |      0.667 | $250.00        | $166.72         |
| 2024-04-14 |      0.247 | $750.00        | $184.94         |
| 2024-04-07 |      0.201 | $750.00        | $150.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
