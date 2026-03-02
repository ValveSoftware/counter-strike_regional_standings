### Roster Details<br />
Team Name: confidence<br />
Roster: AverOna, c0ldhurt, icytears, metori, Stormy<br />
Global Rank: [250](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [158]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  600.2<br />
<br />
Final Rank Value (600.2) = Starting Rank Value (618.5) + Head To Head Adjustments (-18.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 618.5
- 400 + ( ( 0.115 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 618.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      799 | 2026-02-12 | hindsight          | L   | 1.000      | -            | -                | -                | -         |   -15.58 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            4 |      878 | 2026-02-10 | BIG EQUIPA         | L   | 1.000      | -            | -                | -                | -         |    -4.80 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            3 |     2850 | 2025-11-08 | BIG EQUIPA         | L   | 0.440      | -            | -                | -                | -         |    -1.99 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            2 |     2999 | 2025-11-06 | Pigeons            | L   | 0.427      | -            | -                | -                | -         |    -3.04 | AverOna, c0ldhurt, icytears, metori, Stormy |
|            1 |     3055 | 2025-11-04 | Fingers Crossed fe | W   | 0.414      | 0.307        | 0.004 (0.000)    | 0.125 (0.016)    | 0 (0.000) |     7.15 | AverOna, c0ldhurt, icytears, metori, Stormy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($723.60)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      1.000 | $500.00        | $500.00         |
| 2025-11-09 |      0.447 | $500.00        | $223.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
