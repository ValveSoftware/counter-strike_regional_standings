### Roster Details<br />
Team Name: NewBALLS<br />
Roster: 4X1s, Alv, deeN, strix, torox<br />
Global Rank: [263](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [147]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  518.0<br />
<br />
Final Rank Value (518.0) = Starting Rank Value (507.7) + Head To Head Adjustments (10.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.7
- 400 + ( ( 0.056 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 507.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1797 | 2024-11-03 | 9INE     | L   | 0.399      | -            | -                | -                | -         |    -2.46 | 4X1s, Alv, deeN, strix, torox |
|            4 |     1848 | 2024-11-01 | ARCRED   | W   | 0.386      | 0.384        | 0.015 (0.002)    | 0.285 (0.042)    | 0 (0.000) |     9.06 | 4X1s, Alv, deeN, strix, torox |
|            3 |     2004 | 2024-10-24 | Endpoint | L   | 0.332      | -            | -                | -                | -         |    -2.37 | 4X1s, Alv, deeN, strix, torox |
|            2 |     2115 | 2024-10-18 | Apogee   | W   | 0.292      | 0.384        | 0.003 (0.000)    | 0.103 (0.012)    | 0 (0.000) |     6.64 | 4X1s, Alv, deeN, strix, torox |
|            1 |     2228 | 2024-10-12 | 9 Pandas | L   | 0.253      | -            | -                | -                | -         |    -0.61 | 4X1s, Alv, deeN, strix, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
