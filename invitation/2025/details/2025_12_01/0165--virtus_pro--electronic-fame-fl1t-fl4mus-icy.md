### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, FL4MUS, ICY<br />
Global Rank: [165](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [105]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  715.0<br />
<br />
Final Rank Value (715.0) = Starting Rank Value (709.9) + Head To Head Adjustments (5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.9
- 400 + ( ( 0.163 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 709.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4430 | 2025-06-15 | paiN     | L   | 0.075      | -            | -                | -                | -         |    -0.02 | electroNic, fame, FL1T, FL4MUS, ICY |
|            7 |     4460 | 2025-06-14 | Vitality | L   | 0.068      | -            | -                | -                | -         |    -0.00 | electroNic, fame, FL1T, FL4MUS, ICY |
|            6 |     4509 | 2025-06-13 | FURIA    | L   | 0.060      | -            | -                | -                | -         |    -0.00 | electroNic, fame, FL1T, FL4MUS, ICY |
|            5 |     4534 | 2025-06-12 | Legacy   | W   | 0.054      | 1.000        | 1.000 (0.054)    | 0.577 (0.031)    | 1 (0.054) |     1.70 | electroNic, fame, FL1T, FL4MUS, ICY |
|            4 |     4546 | 2025-06-12 | MOUZ     | W   | 0.053      | 1.000        | 0.562 (0.030)    | 0.403 (0.021)    | 1 (0.053) |     1.66 | electroNic, fame, FL1T, FL4MUS, ICY |
|            3 |     4602 | 2025-06-08 | paiN     | W   | 0.027      | 0.769        | 0.353 (0.007)    | 0.353 (0.007)    | 1 (0.027) |     0.85 | electroNic, fame, FL1T, FL4MUS, ICY |
|            2 |     4621 | 2025-06-07 | B8       | W   | 0.021      | 0.769        | 0.220 (0.004)    | 0.341 (0.005)    | 1 (0.021) |     0.65 | electroNic, fame, FL1T, FL4MUS, ICY |
|            1 |     4628 | 2025-06-07 | OG       | W   | 0.020      | 0.769        | 0.001 (0.000)    | 0.014 (0.000)    | 1 (0.020) |     0.27 | electroNic, fame, FL1T, FL4MUS, ICY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,424.60)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-22 |      0.121 | $20,000.00     | $2,424.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
