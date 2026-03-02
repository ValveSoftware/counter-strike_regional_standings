### Roster Details<br />
Team Name: Betclic<br />
Roster: AdrieN, Demho, hypex, Prism, wizzhehe<br />
Global Rank: [309](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [183]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  489.9<br />
<br />
Final Rank Value (489.9) = Starting Rank Value (487.9) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.9
- 400 + ( ( 0.046 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 487.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4749 | 2025-09-17 | Monte          | L   | 0.092      | -            | -                | -                | -         |    -0.02 | Demho, hypex, Prism, wizzhehe, Xydoo  |
|            7 |     4833 | 2025-09-14 | Spirit Academy | L   | 0.072      | -            | -                | -                | -         |    -0.45 | adex, Demho, hypex, Prism, wizzhehe   |
|            6 |     4915 | 2025-09-12 | ENCE           | L   | 0.061      | -            | -                | -                | -         |    -0.04 | AdrieN, Bogdan, Demho, hypex, Prism   |
|            5 |     4939 | 2025-09-12 | SENZA          | W   | 0.058      | 0.486        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.91 | AdrieN, Demho, hypex, misho, Prism    |
|            4 |     5018 | 2025-09-10 | Metizport      | W   | 0.047      | 0.384        | 0.022 (0.000)    | 0.475 (0.009)    | 0 (0.000) |     1.45 | AdrieN, Demho, hypex, Prism, wizzhehe |
|            3 |     5065 | 2025-09-09 | Sangal         | L   | 0.041      | -            | -                | -                | -         |    -0.08 | AdrieN, Demho, hypex, Prism, wizzhehe |
|            2 |     5205 | 2025-09-05 | ENCE           | L   | 0.014      | -            | -                | -                | -         |    -0.01 | AdrieN, Demho, hypex, Prism, wizzhehe |
|            1 |     5207 | 2025-09-05 | m1x            | W   | 0.013      | 0.303        | 0.000 (0.000)    | 0.047 (0.000)    | 0 (0.000) |     0.24 | AdrieN, Demho, hypex, Prism, wizzhehe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
