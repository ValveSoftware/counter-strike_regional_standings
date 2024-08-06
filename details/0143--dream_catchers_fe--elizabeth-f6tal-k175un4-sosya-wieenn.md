### Roster Details<br />
Team Name: dream catchers fe<br />
Roster: Elizabeth, f6tal, k175un4, sosya, wieenN<br />
Global Rank: [143](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
<br />
Final Rank Value:  745.9<br />
<br />
Final Rank Value (745.9) = Starting Rank Value (718.3) + Head To Head Adjustments (27.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.3
- 400 + ( ( 0.155 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 718.3


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
|           11 |      546 | 2024-07-21 | France fe   | W   | 1.000      | 0.294        | 0.006 (0.002)    | 0.115 (0.034)    | 0 (0.000) |    13.55 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|           10 |      552 | 2024-07-21 | Spirit fe   | W   | 1.000      | 0.294        | 0.005 (0.001)    | 0.136 (0.040)    | 0 (0.000) |    11.63 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            9 |      584 | 2024-07-20 | BIG EQUIPA  | W   | 1.000      | 0.294        | 0.017 (0.005)    | 0.142 (0.042)    | 0 (0.000) |    18.13 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            8 |      866 | 2024-07-14 | CENSORED fe | L   | 1.000      | -            | -                | -                | -         |   -15.97 | Elizabeth, f6tal, k175un4, t4tty, wieenN |
|            7 |      994 | 2024-06-30 | YeYO        | W   | 0.954      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.59 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            6 |     1058 | 2024-06-16 | NIP Impact  | L   | 0.860      | -            | -                | -                | -         |   -13.12 | k175un4, sosya, Stormy, unknxwn, wieenN  |
|            5 |     2932 | 2024-04-14 | Spirit fe   | W   | 0.440      | 0.250        | 0.005 (0.001)    | 0.136 (0.015)    | 0 (0.000) |     5.62 | k175un4, sosya, Stormy, trigusha, wieenN |
|            4 |     3143 | 2024-04-07 | ENCE Athena | W   | 0.394      | 0.250        | 0.002 (0.000)    | 0.033 (0.003)    | 0 (0.000) |     4.83 | k175un4, sosya, Stormy, trigusha, wieenN |
|            3 |     3908 | 2024-03-03 | BIG EQUIPA  | L   | 0.161      | -            | -                | -                | -         |    -2.15 | k175un4, sosya, Stormy, trigusha, wieenN |
|            2 |     4211 | 2024-02-18 | Astralis W  | L   | 0.068      | -            | -                | -                | -         |    -1.35 | k175un4, mikeri, sosya, Stormy, wieenN   |
|            1 |     4216 | 2024-02-18 | Crescent fe | L   | 0.067      | -            | -                | -                | -         |    -1.20 | k175un4, mikeri, sosya, Stormy, wieenN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,095.57)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-07-14 |      1.000 | $500.00        | $500.00         |
| 2024-06-30 |      0.954 | $750.00        | $715.16         |
| 2024-06-16 |      0.860 | $250.00        | $214.97         |
| 2024-04-14 |      0.440 | $750.00        | $329.68         |
| 2024-04-07 |      0.394 | $750.00        | $295.52         |
| 2024-03-03 |      0.161 | $250.00        | $40.24          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
