### Roster Details<br />
Team Name: TNT<br />
Roster: f3tje, fen2k, hahanz0, rv1den, wonimo<br />
Global Rank: [191](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [130]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  727.7<br />
<br />
Final Rank Value (727.7) = Starting Rank Value (669.9) + Head To Head Adjustments (57.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.9
- 400 + ( ( 0.143 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 669.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      534 | 2026-02-17 | ex-Flame Sharks | L   | 1.000      | -            | -                | -                | -         |   -14.99 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            6 |      616 | 2026-02-15 | kONO            | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.420 (0.162)    | 0 (0.000) |    20.51 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            5 |      631 | 2026-02-15 | ASTRAL          | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.498 (0.191)    | 0 (0.000) |    25.20 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            4 |      710 | 2026-02-14 | SPARTA          | L   | 1.000      | -            | -                | -                | -         |    -5.88 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            3 |      794 | 2026-02-12 | Fire Flux       | W   | 1.000      | 0.384        | 0.014 (0.006)    | 0.439 (0.169)    | 0 (0.000) |    24.62 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            2 |     2000 | 2025-12-14 | eLITenergy      | L   | 0.680      | -            | -                | -                | -         |    -9.64 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            1 |     2029 | 2025-12-12 | Oxuji           | W   | 0.667      | 0.278        | 0.020 (0.004)    | 0.417 (0.077)    | 0 (0.000) |    17.98 | f3tje, fen2k, hahanz0, rv1den, wonimo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($510.18)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      0.680 | $750.00        | $510.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
