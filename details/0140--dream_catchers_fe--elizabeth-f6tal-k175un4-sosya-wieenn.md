### Roster Details<br />
Team Name: dream catchers fe<br />
Roster: Elizabeth, f6tal, k175un4, sosya, wieenN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [140](../standings_global.md)<br />
Regional Rank: [91]( ../standings_europe.md)<br />
Final Rank Value:  745.6<br />
<br />
Final Rank Value (745.6) = Starting Rank Value (720.4) + Head To Head Adjustments (25.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.4
- 400 + ( ( 0.158 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 720.4


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
|           11 |       96 | 2024-07-21 | France fe   | W   | 1.000      | 0.294        | 0.007 (0.002)    | 0.122 (0.036)    | 0 (0.000) |    13.62 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|           10 |      102 | 2024-07-21 | Spirit fe   | W   | 1.000      | 0.294        | 0.004 (0.001)    | 0.073 (0.021)    | 0 (0.000) |    11.10 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            9 |      134 | 2024-07-20 | BIG EQUIPA  | W   | 1.000      | 0.294        | 0.022 (0.007)    | 0.186 (0.055)    | 0 (0.000) |    18.97 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            8 |      416 | 2024-07-14 | CENSORED fe | L   | 1.000      | -            | -                | -                | -         |   -15.88 | Elizabeth, f6tal, k175un4, t4tty, wieenN |
|            7 |      544 | 2024-06-30 | YeYO        | W   | 1.000      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.99 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            6 |      608 | 2024-06-16 | NIP Impact  | L   | 0.946      | -            | -                | -                | -         |   -14.17 | k175un4, sosya, Stormy, unknxwn, wieenN  |
|            5 |     2482 | 2024-04-14 | Spirit fe   | W   | 0.526      | 0.250        | 0.004 (0.000)    | 0.073 (0.010)    | 0 (0.000) |     6.43 | k175un4, sosya, Stormy, trigusha, wieenN |
|            4 |     2693 | 2024-04-07 | ENCE Athena | W   | 0.480      | 0.250        | 0.003 (0.000)    | 0.049 (0.006)    | 0 (0.000) |     6.03 | k175un4, sosya, Stormy, trigusha, wieenN |
|            3 |     3458 | 2024-03-03 | BIG EQUIPA  | L   | 0.247      | -            | -                | -                | -         |    -3.09 | k175un4, sosya, Stormy, trigusha, wieenN |
|            2 |     3761 | 2024-02-18 | Astralis W  | L   | 0.154      | -            | -                | -                | -         |    -3.03 | k175un4, mikeri, sosya, Stormy, wieenN   |
|            1 |     3766 | 2024-02-18 | Crescent fe | L   | 0.153      | -            | -                | -                | -         |    -2.74 | k175un4, mikeri, sosya, Stormy, wieenN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,303.32)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-07-14 |      1.000 | $500.00        | $500.00         |
| 2024-06-30 |      1.000 | $750.00        | $750.00         |
| 2024-06-16 |      0.946 | $250.00        | $236.58         |
| 2024-04-14 |      0.526 | $750.00        | $394.52         |
| 2024-04-07 |      0.480 | $750.00        | $360.36         |
| 2024-03-03 |      0.247 | $250.00        | $61.85          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
