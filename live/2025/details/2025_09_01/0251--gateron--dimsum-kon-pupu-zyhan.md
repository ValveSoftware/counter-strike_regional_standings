### Roster Details<br />
Team Name: GATERON<br />
Roster: DimSuM, Kon, Pupu, zyHan<br />
Global Rank: [251](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [42]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  487.7<br />
<br />
Final Rank Value (487.7) = Starting Rank Value (496.8) + Head To Head Adjustments (-9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 496.8
- 400 + ( ( 0.050 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 496.8


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
|            5 |     2007 | 2025-05-12 | Steel Helmet      | L   | 0.453      | -            | -                | -                | -         |    -9.01 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            4 |     2108 | 2025-05-08 | TBO               | L   | 0.427      | -            | -                | -                | -         |    -2.18 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            3 |     2444 | 2025-04-25 | Only One Word     | L   | 0.339      | -            | -                | -                | -         |    -3.28 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            2 |     2528 | 2025-04-19 | KZG               | W   | 0.299      | 0.624        | 0.001 (0.000)    | 0.011 (0.002)    | 1 (0.299) |     5.73 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            1 |     2551 | 2025-04-18 | Chinggis Warriors | L   | 0.292      | -            | -                | -                | -         |    -0.34 | DimSuM, Kon, Owbb, Pupu, zyHan |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
