### Roster Details<br />
Team Name: Betclic<br />
Roster: AdrieN, Demho, hypex, Prism, wizzhehe<br />
Global Rank: [255](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [153]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  538.7<br />
<br />
Final Rank Value (538.7) = Starting Rank Value (511.9) + Head To Head Adjustments (26.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.9
- 400 + ( ( 0.056 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 511.9


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
|            8 |     2969 | 2025-09-17 | Monte          | L   | 0.465      | -            | -                | -                | -         |    -0.24 | Demho, hypex, Prism, wizzhehe, Xydoo  |
|            7 |     3053 | 2025-09-14 | Spirit Academy | L   | 0.446      | -            | -                | -                | -         |    -1.88 | adex, Demho, hypex, Prism, wizzhehe   |
|            6 |     3135 | 2025-09-12 | ENCE           | L   | 0.434      | -            | -                | -                | -         |    -0.13 | AdrieN, Bogdan, Demho, hypex, Prism   |
|            5 |     3159 | 2025-09-12 | SENZA          | W   | 0.431      | 0.486        | 0.000 (0.000)    | 0.050 (0.011)    | 0 (0.000) |     9.25 | AdrieN, Demho, hypex, misho, Prism    |
|            4 |     3238 | 2025-09-10 | Metizport      | W   | 0.421      | 0.384        | 0.015 (0.002)    | 0.320 (0.052)    | 0 (0.000) |    12.68 | AdrieN, Demho, hypex, Prism, wizzhehe |
|            3 |     3285 | 2025-09-09 | Sangal         | L   | 0.414      | -            | -                | -                | -         |    -0.46 | AdrieN, Demho, hypex, Prism, wizzhehe |
|            2 |     3425 | 2025-09-05 | ENCE           | L   | 0.387      | -            | -                | -                | -         |    -0.10 | AdrieN, Demho, hypex, Prism, wizzhehe |
|            1 |     3427 | 2025-09-05 | m1x            | W   | 0.387      | 0.303        | 0.000 (0.000)    | 0.204 (0.024)    | 0 (0.000) |     7.67 | AdrieN, Demho, hypex, Prism, wizzhehe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
