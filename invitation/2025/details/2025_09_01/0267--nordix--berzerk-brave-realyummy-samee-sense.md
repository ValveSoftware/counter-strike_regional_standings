### Roster Details<br />
Team Name: Nordix<br />
Roster: berzerk, Brave, Realyummy, samee, sense<br />
Global Rank: [267](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [139]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  400.3<br />
<br />
Final Rank Value (400.3) = Starting Rank Value (400.1) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 400.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1788 | 2025-05-21 | JANO     | L   | 0.513      | -            | -                | -                | -         |    -5.03 | berzerk, Brave, Realyummy, samee, sense |
|            4 |     1824 | 2025-05-20 | ECSTATIC | L   | 0.505      | -            | -                | -                | -         |    -0.17 | berzerk, Brave, Realyummy, samee, sense |
|            3 |     2438 | 2025-04-25 | 777      | W   | 0.341      | 0.435        | 0.000 (0.000)    | 0.016 (0.002)    | 0 (0.000) |     5.33 | berzerk, Brave, Realyummy, samee, sense |
|            2 |     2457 | 2025-04-24 | INFURITY | W   | 0.334      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.23 | berzerk, Brave, Realyummy, samee, sense |
|            1 |     2464 | 2025-04-23 | 777      | L   | 0.328      | -            | -                | -                | -         |    -5.14 | berzerk, Brave, Realyummy, samee, sense |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
