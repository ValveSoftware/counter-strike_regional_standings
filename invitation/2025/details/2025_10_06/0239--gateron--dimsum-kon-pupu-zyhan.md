### Roster Details<br />
Team Name: GATERON<br />
Roster: DimSuM, Kon, Pupu, zyHan<br />
Global Rank: [239](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_06.md)<br />
Regional Rank: [37]( ../../standings_asia_2025_10_06.md)<br />
<br />
Final Rank Value:  399.1<br />
<br />
Final Rank Value (399.1) = Starting Rank Value (403.3) + Head To Head Adjustments (-4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.3
- 400 + ( ( 0.002 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 403.3


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
|            5 |     3138 | 2025-05-12 | Steel Helmet      | L   | 0.220      | -            | -                | -                | -         |    -3.50 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            4 |     3239 | 2025-05-08 | Last Bullet       | L   | 0.194      | -            | -                | -                | -         |    -0.84 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            3 |     3575 | 2025-04-25 | The Art of War    | L   | 0.106      | -            | -                | -                | -         |    -0.85 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            2 |     3659 | 2025-04-19 | KZG               | W   | 0.066      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.066) |     1.03 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            1 |     3682 | 2025-04-18 | Chinggis Warriors | L   | 0.059      | -            | -                | -                | -         |    -0.02 | DimSuM, Kon, Owbb, Pupu, zyHan |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
