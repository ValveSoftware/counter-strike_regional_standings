### Roster Details<br />
Team Name: Anonymo<br />
Roster: AdrieN, chudy, darchevile, Melavi, Nami<br />
Global Rank: [218](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [122]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  534.3<br />
<br />
Final Rank Value (534.3) = Starting Rank Value (506.8) + Head To Head Adjustments (27.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.8
- 400 + ( ( 0.055 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 506.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      546 | 2025-09-15 | AMKAL            | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.558 (0.080)    | 0 (0.000) |    27.66 | AdrieN, chudy, darchevile, Melavi, Nami |
|            7 |      639 | 2025-09-13 | SENZA            | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.247 (0.035)    | 0 (0.000) |    26.21 | AdrieN, chudy, darchevile, Melavi, Nami |
|            6 |      682 | 2025-09-12 | Wildcard Academy | L   | 1.000      | -            | -                | -                | -         |   -14.31 | chudy, darchevile, Melavi, Nami, yvro   |
|            5 |     1992 | 2025-07-20 | xdasdf           | L   | 0.680      | -            | -                | -                | -         |   -13.57 | AdrieN, chudy, hfah, Nami, yvro         |
|            4 |     2293 | 2025-07-08 | NOVAQ            | L   | 0.600      | -            | -                | -                | -         |    -2.21 | AdrieN, chudy, darchevile, Melavi, Nami |
|            3 |     2316 | 2025-07-05 | Fisher College   | W   | 0.580      | 0.486        | 0.000 (0.000)    | 0.053 (0.015)    | 0 (0.000) |    10.47 | AdrieN, chudy, darchevile, Melavi, Nami |
|            2 |     2323 | 2025-07-04 | Dziuseppe        | L   | 0.573      | -            | -                | -                | -         |    -4.05 | AdrieN, chudy, darchevile, Melavi, Nami |
|            1 |     2344 | 2025-07-01 | KHAN             | L   | 0.553      | -            | -                | -                | -         |    -2.72 | AdrieN, chudy, darchevile, Melavi, Nami |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
