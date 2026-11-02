### Roster Details<br />
Team Name: DNK<br />
Roster: CoolezW, dethera, jtski557, syr1n<br />
Global Rank: [193](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [135]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  721.9<br />
<br />
Final Rank Value (721.9) = Starting Rank Value (708.2) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.2
- 400 + ( ( 0.165 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 708.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      712 | 2026-10-13 | Phantom     | L   | 1.000      | -            | -                | -                | -         |    -1.83 | CoolezW, dethera, jtski557, syr1n, tier0 s |
|            4 |     1347 | 2026-09-29 | Rune Eaters | L   | 0.972      | -            | -                | -                | -         |    -4.46 | CoolezW, dethera, jtski557, syr1n, tier0 s |
|            3 |     1350 | 2026-09-29 | WW          | W   | 0.972      | 0.371        | 0.029 (0.010)    | 0.293 (0.105)    | 1 (0.972) |    25.86 | CoolezW, dethera, jtski557, syr1n, tier0 s |
|            2 |     1362 | 2026-09-29 | Rune Eaters | L   | 0.971      | -            | -                | -                | -         |    -3.62 | CoolezW, dethera, jtski557, syr1n, tier0 s |
|            1 |     3257 | 2026-08-16 | Rune Eaters | L   | 0.680      | -            | -                | -                | -         |    -2.29 | CoolezW, dethera, jtski557, RamBLBi, syr1n |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,496.55)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-30 |      0.979 | $1,500.00      | $1,468.82       |
| 2026-08-16 |      0.680 | $1,512.00      | $1,027.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
