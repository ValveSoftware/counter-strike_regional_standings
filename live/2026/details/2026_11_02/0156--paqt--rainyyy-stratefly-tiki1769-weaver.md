### Roster Details<br />
Team Name: PAQT<br />
Roster: raiNyyy, stratefly, TIKI1769, wEAVER<br />
Global Rank: [156](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [110]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  813.2<br />
<br />
Final Rank Value (813.2) = Starting Rank Value (783.7) + Head To Head Adjustments (29.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.271[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 783.7
- 400 + ( ( 0.205 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 783.7


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
|            5 |     1310 | 2026-09-30 | Rune Eaters | L   | 0.978      | -            | -                | -                | -         |    -6.62 | AykeN, raiNyyy, stratefly, TIKI1769, wEAVER |
|            4 |     1353 | 2026-09-29 | VISION      | W   | 0.972      | 0.371        | 0.003 (0.001)    | 0.031 (0.011)    | 1 (0.972) |    11.58 | AykeN, raiNyyy, stratefly, TIKI1769, wEAVER |
|            3 |     1359 | 2026-09-29 | DEPO        | W   | 0.971      | 0.371        | 0.013 (0.005)    | 0.280 (0.101)    | 1 (0.971) |    23.36 | AykeN, raiNyyy, stratefly, TIKI1769, wEAVER |
|            2 |     2793 | 2026-08-30 | Game Point  | W   | 0.772      | 0.301        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.772) |     4.49 | kumao, raiNyyy, stratefly, TIKI1769, wEAVER |
|            1 |     2803 | 2026-08-30 | Omega       | L   | 0.771      | -            | -                | -                | -         |    -3.25 | kumao, raiNyyy, stratefly, TIKI1769, wEAVER |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,542.32)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-30 |      0.979 | $2,000.00      | $1,958.43       |
| 2026-08-30 |      0.772 | $756.00        | $583.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
