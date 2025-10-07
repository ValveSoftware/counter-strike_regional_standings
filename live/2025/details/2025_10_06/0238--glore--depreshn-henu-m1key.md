### Roster Details<br />
Team Name: GLORE<br />
Roster: DEPRESHN, HENU, M1key<br />
Global Rank: [238](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [129]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  422.2<br />
<br />
Final Rank Value (422.2) = Starting Rank Value (400.3) + Head To Head Adjustments (21.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.3
- 400 + ( ( 0.000 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 400.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      154 | 2025-09-28 | Zennox       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |    15.35 | DEPRESHN, HENU, M1key, neptun, STYKO |
|            4 |      165 | 2025-09-28 | SINNERS      | L   | 1.000      | -            | -                | -                | -         |    -1.39 | DEPRESHN, HENU, M1key, neptun, STYKO |
|            3 |      306 | 2025-09-25 | 1DayHeroes   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    15.39 | DEPRESHN, HENU, M1key, neptun, STYKO |
|            2 |      313 | 2025-09-25 | Y5           | L   | 1.000      | -            | -                | -                | -         |    -5.31 | DEPRESHN, HENU, Jelo, M1key, Sm1llee |
|            1 |      326 | 2025-09-24 | Eternal Fire | L   | 1.000      | -            | -                | -                | -         |    -2.16 | DEPRESHN, HENU, Jelo, M1key, Sm1llee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
