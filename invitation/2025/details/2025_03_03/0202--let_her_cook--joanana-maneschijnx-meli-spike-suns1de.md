### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: Joanana, ManeschijnX, meli, spike, suns1de<br />
Global Rank: [202](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [125]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  624.6<br />
<br />
Final Rank Value (624.6) = Starting Rank Value (625.2) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.2
- 400 + ( ( 0.117 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 625.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2045 | 2024-10-20 | Eco Warriors | L   | 0.307      | -            | -                | -                | -         |    -2.92 | Joanana, ManeschijnX, meli, spike, suns1de |
|            6 |     2080 | 2024-10-19 | BIG EQUIPA   | L   | 0.300      | -            | -                | -                | -         |    -3.15 | Joanana, ManeschijnX, meli, spike, suns1de |
|            5 |     2103 | 2024-10-18 | NIP Impact   | W   | 0.294      | 0.328        | 0.011 (0.001)    | 0.056 (0.005)    | 0 (0.000) |     5.61 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            4 |     2767 | 2024-09-26 | ENCE Athena  | W   | 0.147      | 0.328        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.66 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            3 |     3034 | 2024-09-19 | Denmark fe   | L   | 0.101      | -            | -                | -                | -         |    -1.31 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            2 |     3150 | 2024-09-15 | Spirit fe    | L   | 0.073      | -            | -                | -                | -         |    -1.19 | Hikomi, Joanana, ManeschijnX, meli, spike  |
|            1 |     3283 | 2024-09-11 | Spirit fe    | W   | 0.048      | 0.328        | 0.002 (0.000)    | 0.043 (0.001)    | 0 (0.000) |     0.73 | Hikomi, Joanana, ManeschijnX, meli, spike  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($540.52)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.307 | $1,700.00      | $522.18         |
| 2024-09-15 |      0.073 | $250.00        | $18.33          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
