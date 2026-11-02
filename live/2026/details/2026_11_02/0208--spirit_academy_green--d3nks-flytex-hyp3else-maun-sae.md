### Roster Details<br />
Team Name: Spirit Academy Green<br />
Roster: d3nks, flytex, hyp3else, maun, sae<br />
Global Rank: [208](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [145]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  700.0<br />
<br />
Final Rank Value (700.0) = Starting Rank Value (662.2) + Head To Head Adjustments (37.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.2
- 400 + ( ( 0.140 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 662.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1449 | 2026-09-26 | Young TigeRES | L   | 0.954      | -            | -                | -                | -         |   -11.50 | d3nks, flytex, hyp3else, maun, sae |
|            5 |     1548 | 2026-09-25 | BAKS          | W   | 0.947      | 0.400        | 0.012 (0.004)    | 0.581 (0.220)    | 0 (0.000) |    26.41 | d3nks, flytex, hyp3else, maun, sae |
|            4 |     1905 | 2026-09-18 | OLDBOYS PL    | W   | 0.900      | 0.357        | 0.000 (0.000)    | 0.103 (0.033)    | 0 (0.000) |    11.06 | d3nks, flytex, hyp3else, maun, sae |
|            3 |     2210 | 2026-09-11 | Fire Flux     | L   | 0.854      | -            | -                | -                | -         |    -7.50 | d3nks, flytex, hyp3else, maun, sae |
|            2 |     2325 | 2026-09-09 | Dark Moon     | W   | 0.841      | 0.357        | 0.000 (0.000)    | 0.026 (0.008)    | 0 (0.000) |     4.79 | d3nks, flytex, hyp3else, maun, sae |
|            1 |     2507 | 2026-09-05 | KUUSAMO       | W   | 0.814      | 0.357        | 0.000 (0.000)    | 0.192 (0.056)    | 0 (0.000) |    14.54 | d3nks, flytex, hyp3else, maun, sae |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,452.72)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-30 |      0.981 | $2,500.00      | $2,452.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
