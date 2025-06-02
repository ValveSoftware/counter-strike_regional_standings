### Roster Details<br />
Team Name: Nordix<br />
Roster: berzerk, Brave, Realyummy, samee, sense<br />
Global Rank: [267](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [143]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  409.2<br />
<br />
Final Rank Value (409.2) = Starting Rank Value (400.2) + Head To Head Adjustments (9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.2
- 400 + ( ( 0.000 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 400.2


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
|            5 |      131 | 2025-05-21 | JANO     | L   | 1.000      | -            | -                | -                | -         |    -5.05 | berzerk, Brave, Realyummy, samee, sense |
|            4 |      160 | 2025-05-20 | ECSTATIC | L   | 1.000      | -            | -                | -                | -         |    -0.46 | berzerk, Brave, Realyummy, samee, sense |
|            3 |      745 | 2025-04-25 | 777      | W   | 0.951      | 0.143        | 0.000 (0.000)    | 0.039 (0.005)    | 0 (0.000) |    14.41 | berzerk, Brave, Realyummy, samee, sense |
|            2 |      764 | 2025-04-24 | INFURITY | W   | 0.945      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    14.30 | berzerk, Brave, Realyummy, samee, sense |
|            1 |      771 | 2025-04-23 | 777      | L   | 0.939      | -            | -                | -                | -         |   -14.22 | berzerk, Brave, Realyummy, samee, sense |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
