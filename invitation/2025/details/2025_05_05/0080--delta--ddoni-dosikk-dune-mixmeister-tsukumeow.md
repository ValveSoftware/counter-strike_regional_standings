### Roster Details<br />
Team Name: Delta<br />
Roster: ddoni, dosikk, dune, mixmeister, tsukumeow<br />
Global Rank: [80](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [50]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  808.9<br />
<br />
Final Rank Value (808.9) = Starting Rank Value (813.3) + Head To Head Adjustments (-4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.320[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 813.3
- 400 + ( ( 0.228 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 813.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      475 | 2025-04-06 | DEPO        | W   | 1.000      | 0.333        | 0.007 (0.002)    | 0.102 (0.034)    | 1 (1.000) |    13.71 | ddoni, dosikk, dune, mixmeister, tsukumeow  |
|            5 |      478 | 2025-04-06 | RAGE        | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.051 (0.017)    | 1 (1.000) |    11.91 | ddoni, dosikk, dune, mixmeister, tsukumeow  |
|            4 |      481 | 2025-04-06 | ALLINNERS   | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.001 (0.000)    | 1 (1.000) |     7.77 | ddoni, dosikk, dune, mixmeister, tsukumeow  |
|            3 |      492 | 2025-04-05 | RAGE        | L   | 0.999      | -            | -                | -                | -         |   -18.98 | ddoni, dosikk, dune, mixmeister, tsukumeow  |
|            2 |     1054 | 2025-03-16 | Spray Jutsu | L   | 0.868      | -            | -                | -                | -         |   -16.27 | ddoni, dosikk, dune, mixmeister, tsukumeow  |
|            1 |     2985 | 2024-11-24 | RAGE        | L   | 0.121      | -            | -                | -                | -         |    -2.50 | ddoni, dosikk, mixmeister, tsukumeow, zcuhn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,517.61)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-06 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-03-16 |      0.868 | $512.00        | $444.60         |
| 2024-11-24 |      0.121 | $603.00        | $73.00          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
