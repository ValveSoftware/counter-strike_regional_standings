### Roster Details<br />
Team Name: KUUSAMO<br />
Roster: epik, Keksimage, Orava, osku, rbm<br />
Global Rank: [290](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [186]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  600.3<br />
<br />
Final Rank Value (600.3) = Starting Rank Value (631.6) + Head To Head Adjustments (-31.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.052[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.6
- 400 + ( ( 0.123 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 631.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      671 | 2026-05-30 | cirahvi  | L   | 0.954      | -            | -                | -                | -         |   -12.91 | epik, Keksimage, Orava, osku, rbm  |
|            7 |      713 | 2026-05-29 | ENCE     | L   | 0.947      | -            | -                | -                | -         |    -6.66 | epik, Keksimage, Orava, osku, rbm  |
|            6 |     2262 | 2026-04-12 | cirahvi  | L   | 0.633      | -            | -                | -                | -         |    -7.15 | epik, Keksimage, Orava, osku, rbm  |
|            5 |     2287 | 2026-04-11 | BOJONG   | W   | 0.627      | 0.309        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.76 | epik, Keksimage, Orava, osku, rbm  |
|            4 |     2318 | 2026-04-10 | ENCE     | L   | 0.620      | -            | -                | -                | -         |    -4.85 | epik, Keksimage, Orava, osku, rbm  |
|            3 |     3439 | 2026-03-23 | Wampirki | L   | 0.500      | -            | -                | -                | -         |    -8.09 | epik, jalwar, Keksimage, osku, rbm |
|            2 |     3444 | 2026-03-23 | Phantom  | L   | 0.500      | -            | -                | -                | -         |    -1.64 | epik, jalwar, Keksimage, osku, rbm |
|            1 |     3451 | 2026-03-23 | EC BANGA | W   | 0.499      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.499) |     3.31 | epik, jalwar, Keksimage, osku, rbm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,107.35)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.961 | $582.00        | $559.46         |
| 2026-04-12 |      0.634 | $864.00        | $547.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
