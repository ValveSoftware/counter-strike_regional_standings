### Roster Details<br />
Team Name: Y27<br />
Roster: Aliot, desway, larlo, mero, seberya<br />
Global Rank: [304](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [203]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  565.4<br />
<br />
Final Rank Value (565.4) = Starting Rank Value (563.7) + Head To Head Adjustments (1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.087[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 563.7
- 400 + ( ( 0.087 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 563.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      578 | 2026-10-16 | Xcity         | L   | 1.000      | -            | -                | -                | -         |   -15.34 | Aliot, desway, larlo, mero, seberya |
|            4 |      589 | 2026-10-16 | Young TigeRES | L   | 1.000      | -            | -                | -                | -         |    -7.56 | Aliot, desway, larlo, mero, seberya |
|            3 |     2064 | 2026-09-14 | WW            | L   | 0.875      | -            | -                | -                | -         |    -1.49 | Aliot, desway, larlo, mero, seberya |
|            2 |     2067 | 2026-09-14 | Nemiga        | L   | 0.874      | -            | -                | -                | -         |    -0.10 | Aliot, desway, larlo, mero, seberya |
|            1 |     2074 | 2026-09-14 | WW            | W   | 0.873      | 0.417        | 0.029 (0.011)    | 0.293 (0.107)    | 1 (0.873) |    26.14 | Aliot, desway, larlo, mero, seberya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
