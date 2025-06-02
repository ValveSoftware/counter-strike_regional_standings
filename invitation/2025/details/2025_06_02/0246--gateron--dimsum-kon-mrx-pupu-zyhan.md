### Roster Details<br />
Team Name: GATERON<br />
Roster: DimSuM, Kon, Mrx, Pupu, zyHan<br />
Global Rank: [246](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [38]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  504.5<br />
<br />
Final Rank Value (504.5) = Starting Rank Value (524.2) + Head To Head Adjustments (-19.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 524.2
- 400 + ( ( 0.068 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 524.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      330 | 2025-05-12 | Steel Helmet      | L   | 1.000      | -            | -                | -                | -         |   -20.60 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            4 |      431 | 2025-05-08 | DogEvil           | L   | 1.000      | -            | -                | -                | -         |    -5.09 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            3 |      751 | 2025-04-25 | Only One Word     | L   | 0.950      | -            | -                | -                | -         |    -8.66 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            2 |      835 | 2025-04-19 | KZG               | W   | 0.910      | 0.143        | 0.001 (0.000)    | 0.124 (0.016)    | 1 (0.910) |    15.84 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            1 |      858 | 2025-04-18 | Chinggis Warriors | L   | 0.903      | -            | -                | -                | -         |    -1.17 | DimSuM, Kon, Owbb, Pupu, zyHan |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
