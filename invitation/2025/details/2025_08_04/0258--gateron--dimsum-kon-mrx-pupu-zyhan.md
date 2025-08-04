### Roster Details<br />
Team Name: GATERON<br />
Roster: DimSuM, Kon, Mrx, Pupu, zyHan<br />
Global Rank: [258](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [40]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  489.0<br />
<br />
Final Rank Value (489.0) = Starting Rank Value (501.4) + Head To Head Adjustments (-12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.160[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.4
- 400 + ( ( 0.054 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 501.4


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
|            5 |     1317 | 2025-05-12 | Steel Helmet      | L   | 0.640      | -            | -                | -                | -         |   -12.80 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            4 |     1418 | 2025-05-08 | Wings Up          | L   | 0.614      | -            | -                | -                | -         |    -3.13 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            3 |     1754 | 2025-04-25 | Only One Word     | L   | 0.526      | -            | -                | -                | -         |    -4.80 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            2 |     1838 | 2025-04-19 | KZG               | W   | 0.486      | 0.143        | 0.001 (0.000)    | 0.043 (0.003)    | 1 (0.486) |     9.11 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            1 |     1861 | 2025-04-18 | Chinggis Warriors | L   | 0.479      | -            | -                | -                | -         |    -0.77 | DimSuM, Kon, Owbb, Pupu, zyHan |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
