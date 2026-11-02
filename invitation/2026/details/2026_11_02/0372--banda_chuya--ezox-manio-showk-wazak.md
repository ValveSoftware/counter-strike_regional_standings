### Roster Details<br />
Team Name: Banda Chuya<br />
Roster: ezox, manio, Showk, wazak<br />
Global Rank: [372](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [243]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  391.1<br />
<br />
Final Rank Value (391.1) = Starting Rank Value (400.4) + Head To Head Adjustments (-9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.4
- 400 + ( ( 0.000 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 400.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2206 | 2026-09-11 | LPH           | L   | 0.854      | -            | -                | -                | -         |    -2.34 | ezox, manio, pendzelek, Showk, wazak |
|            5 |     2327 | 2026-09-09 | JUMBO         | W   | 0.841      | 0.357        | 0.000 (0.000)    | 0.032 (0.009)    | 0 (0.000) |    15.21 | ezox, manio, pendzelek, run1c, wazak |
|            4 |     2514 | 2026-09-05 | Dark Moon     | L   | 0.813      | -            | -                | -                | -         |   -12.15 | ezox, manio, pendzelek, run1c, Showk |
|            3 |     3722 | 2026-07-31 | mellren       | L   | 0.573      | -            | -                | -                | -         |    -1.34 | ezox, manio, Pelle, Showk, wazak     |
|            2 |     3751 | 2026-07-30 | Young TigeRES | L   | 0.567      | -            | -                | -                | -         |    -1.91 | ezox, manio, Pelle, Showk, wazak     |
|            1 |     4285 | 2026-07-10 | The Boys      | L   | 0.434      | -            | -                | -                | -         |    -6.82 | ezox, maaryy, manio, Showk, wazak    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
