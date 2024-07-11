### Roster Details<br />
Team Name: 9INE<br />
Roster: mantuu, misutaaa, raalz, refrezh, s0und<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [118](../standings_global.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
Final Rank Value:  820.1<br />
<br />
Final Rank Value (820.1) = Starting Rank Value (796.8) + Head To Head Adjustments (23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 796.8
- 400 + ( ( 0.188 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 796.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |        7 | 2024-07-11 | Endpoint      | L   | 1.000      | -            | -                | -                | -         |   -12.39 | mantuu, misutaaa, raalz, refrezh, s0und |
|            9 |       30 | 2024-07-10 | Sashi         | L   | 1.000      | -            | -                | -                | -         |    -2.78 | mantuu, misutaaa, n0te, raalz, s0und    |
|            8 |       50 | 2024-07-09 | Johnny Speeds | L   | 1.000      | -            | -                | -                | -         |    -2.26 | mantuu, misutaaa, raalz, refrezh, s0und |
|            7 |      257 | 2024-06-13 | 3DMAX         | L   | 1.000      | -            | -                | -                | -         |    -3.33 | mantuu, misutaaa, raalz, refrezh, s0und |
|            6 |      374 | 2024-06-09 | 3DMAX         | W   | 0.987      | 0.450        | 0.205 (0.091)    | 1.000 (0.444)    | 0 (0.000) |    27.14 | mantuu, misutaaa, raalz, refrezh, s0und |
|            5 |      440 | 2024-06-08 | BLEED         | L   | 0.980      | -            | -                | -                | -         |    -2.06 | mantuu, misutaaa, raalz, refrezh, s0und |
|            4 |      495 | 2024-06-07 | Endpoint      | W   | 0.974      | 0.450        | 0.017 (0.008)    | 0.524 (0.230)    | 0 (0.000) |    18.58 | mantuu, misutaaa, raalz, refrezh, s0und |
|            3 |      519 | 2024-06-07 | Romania       | W   | 0.972      | 0.500        | 0.011 (0.005)    | 0.375 (0.182)    | 0 (0.000) |    14.45 | mantuu, misutaaa, raalz, refrezh, s0und |
|            2 |      577 | 2024-06-06 | EYEBALLERS    | L   | 0.966      | -            | -                | -                | -         |    -9.17 | mantuu, misutaaa, raalz, refrezh, s0und |
|            1 |      614 | 2024-06-05 | Rebels        | L   | 0.961      | -            | -                | -                | -         |    -4.93 | mantuu, misutaaa, raalz, refrezh, s0und |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
