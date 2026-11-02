### Roster Details<br />
Team Name: BIG Academy<br />
Roster: doni, JBOEN, prosus, w1dow<br />
Global Rank: [334](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [222]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  504.0<br />
<br />
Final Rank Value (504.0) = Starting Rank Value (504.4) + Head To Head Adjustments (-0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 504.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4449 | 2026-06-30 | overTIME         | L   | 0.364      | -            | -                | -                | -         |    -4.09 | doni, JBOEN, Krimbo, prosus, w1dow |
|            4 |     4495 | 2026-06-28 | Saint Sinners    | L   | 0.352      | -            | -                | -                | -         |    -1.75 | doni, JBOEN, Krimbo, prosus, w1dow |
|            3 |     4874 | 2026-06-07 | GenOne           | L   | 0.214      | -            | -                | -                | -         |    -0.14 | doni, JBOEN, prosus, ta9z, w1dow   |
|            2 |     4901 | 2026-06-06 | ex-Zero Tenacity | L   | 0.207      | -            | -                | -                | -         |    -0.62 | doni, JBOEN, prosus, ta9z, w1dow   |
|            1 |     4936 | 2026-06-05 | GenOne           | W   | 0.201      | 0.344        | 0.037 (0.003)    | 0.709 (0.049)    | 0 (0.000) |     6.20 | doni, JBOEN, prosus, ta9z, w1dow   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
