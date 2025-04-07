### Roster Details<br />
Team Name: IHC<br />
Roster: AccuracyTG, Efire, rate, ROUX, Zesta<br />
Global Rank: [173](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [23]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  633.3<br />
<br />
Final Rank Value (633.3) = Starting Rank Value (629.9) + Head To Head Adjustments (3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.9
- 400 + ( ( 0.125 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 629.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2640 | 2024-11-08 | ex-GR    | L   | 0.199      | -            | -                | -                | -         |    -2.90 | AccuracyTG, Efire, rate, ROUX, Zesta |
|            4 |     2646 | 2024-11-07 | The Huns | W   | 0.197      | 0.333        | 0.064 (0.004)    | 0.479 (0.032)    | 0 (0.000) |     5.84 | AccuracyTG, Efire, rate, ROUX, Zesta |
|            3 |     2664 | 2024-11-07 | Clutch   | W   | 0.191      | 0.333        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     1.95 | AccuracyTG, Efire, rate, ROUX, Zesta |
|            2 |     2699 | 2024-11-05 | ex-GR    | L   | 0.178      | -            | -                | -                | -         |    -2.61 | AccuracyTG, Efire, rate, ROUX, Zesta |
|            1 |     2700 | 2024-11-04 | NOVA     | W   | 0.177      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.21 | AccuracyTG, Efire, rate, ROUX, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($497.28)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-08 |      0.199 | $2,500.00      | $497.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
