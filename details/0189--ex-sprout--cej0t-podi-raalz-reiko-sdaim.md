### Roster Details<br />
Team Name: ex-Sprout<br />
Roster: cej0t, podi, raalz, reiko, Sdaim<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [189](../standings_global.md)<br />
Regional Rank: [122]( ../standings_europe.md)<br />
Final Rank Value:  550.5<br />
<br />
Final Rank Value (550.5) = Starting Rank Value (541.2) + Head To Head Adjustments (9.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.2
- 400 + ( ( 0.066 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 541.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2614 | 2024-03-28 | Rebels          | L   | 0.461      | -            | -                | -                | -         |    -0.81 | cej0t, podi, raalz, reiko, Sdaim     |
|           16 |     2688 | 2024-03-25 | ALTERNATE aTTaX | L   | 0.441      | -            | -                | -                | -         |    -0.84 | cej0t, podi, raalz, reiko, Sdaim     |
|           15 |     2718 | 2024-03-22 | Aurora          | L   | 0.421      | -            | -                | -                | -         |    -0.03 | cej0t, podi, raalz, reiko, Sdaim     |
|           14 |     2789 | 2024-03-19 | B8              | L   | 0.399      | -            | -                | -                | -         |    -0.40 | cej0t, podi, raalz, reiko, Sdaim     |
|           13 |     3074 | 2024-03-07 | Alliance        | L   | 0.319      | -            | -                | -                | -         |    -1.18 | cej0t, raalz, reiko, Sdaim, sL1m3    |
|           12 |     3139 | 2024-03-05 | KOI             | L   | 0.307      | -            | -                | -                | -         |    -0.27 | cej0t, raalz, reiko, Sdaim, sL1m3    |
|           11 |     3182 | 2024-03-03 | BetBoom         | L   | 0.294      | -            | -                | -                | -         |    -0.02 | Buzz, cej0t, raalz, reiko, sL1m3     |
|           10 |     3650 | 2024-02-11 | Metizport       | L   | 0.153      | -            | -                | -                | -         |    -0.43 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            9 |     3676 | 2024-02-09 | fnatic          | W   | 0.140      | 0.143        | 0.300 (0.006)    | 0.632 (0.013)    | 0 (0.000) |     4.39 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            8 |     3677 | 2024-02-09 | 3DMAX           | W   | 0.139      | 0.143        | 0.209 (0.004)    | 1.000 (0.020)    | 0 (0.000) |     4.30 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            7 |     3697 | 2024-02-07 | Metizport       | L   | 0.127      | -            | -                | -                | -         |    -0.35 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            6 |     3848 | 2024-01-31 | ex-Preasy       | L   | 0.079      | -            | -                | -                | -         |    -0.37 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            5 |     3859 | 2024-01-30 | Nemiga          | L   | 0.074      | -            | -                | -                | -         |    -0.04 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            4 |     3867 | 2024-01-30 | ECLOT           | W   | 0.074      | 0.143        | 0.103 (0.001)    | 0.551 (0.006)    | 0 (0.000) |     2.27 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            3 |     3870 | 2024-01-30 | ALTERNATE aTTaX | L   | 0.073      | -            | -                | -                | -         |    -0.11 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            2 |     3875 | 2024-01-29 | Imperial fe     | W   | 0.065      | 0.143        | 0.196 (0.002)    | 0.333 (0.003)    | 0 (0.000) |     1.99 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            1 |     3924 | 2024-01-26 | ex-Preasy       | W   | 0.045      | 0.371        | 0.028 (0.000)    | 0.199 (0.003)    | 0 (0.000) |     1.21 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
