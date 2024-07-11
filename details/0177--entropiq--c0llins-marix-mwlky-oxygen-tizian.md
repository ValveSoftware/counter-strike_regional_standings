### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [177](../standings_global.md)<br />
Regional Rank: [110]( ../standings_europe.md)<br />
Final Rank Value:  619.0<br />
<br />
Final Rank Value (619.0) = Starting Rank Value (581.2) + Head To Head Adjustments (37.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.086<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 581.2
- 400 + ( ( 0.086 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 581.2


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
|           23 |     2695 | 2024-03-15 | MOUZ NXT        | L   | 0.413      | -            | -                | -                | -         |    -0.87 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           22 |     2732 | 2024-03-14 | ex-Preasy       | L   | 0.405      | -            | -                | -                | -         |    -2.08 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           21 |     2821 | 2024-03-11 | Czech Republic  | W   | 0.385      | 0.371        | 0.104 (0.015)    | 0.493 (0.070)    | 0 (0.000) |    11.72 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           20 |     2838 | 2024-03-10 | ALTERNATE aTTaX | W   | 0.379      | 0.371        | 0.050 (0.007)    | 0.577 (0.081)    | 0 (0.000) |    11.00 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           19 |     2867 | 2024-03-09 | Alliance        | L   | 0.372      | -            | -                | -                | -         |    -1.74 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           18 |     2882 | 2024-03-08 | Passion UA      | L   | 0.366      | -            | -                | -                | -         |    -0.97 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           17 |     2983 | 2024-03-05 | 500             | L   | 0.345      | -            | -                | -                | -         |    -3.17 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           16 |     3000 | 2024-03-04 | Sashi           | W   | 0.338      | 0.371        | 0.202 (0.025)    | 1.000 (0.125)    | 0 (0.000) |    10.15 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           15 |     3129 | 2024-02-26 | 9INE            | W   | 0.293      | 0.143        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     3.63 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           14 |     3150 | 2024-02-25 | Secret          | W   | 0.286      | 0.358        | 0.000 (0.000)    | 0.092 (0.009)    | 0 (0.000) |     4.26 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           13 |     3200 | 2024-02-23 | Slovakia        | L   | 0.271      | -            | -                | -                | -         |    -1.04 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           12 |     3245 | 2024-02-21 | MOUZ NXT        | L   | 0.258      | -            | -                | -                | -         |    -0.43 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           11 |     3332 | 2024-02-17 | The Chosen Few  | W   | 0.234      | 0.358        | 0.001 (0.000)    | 0.100 (0.008)    | 0 (0.000) |     4.84 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           10 |     3482 | 2024-02-11 | ALTERNATE aTTaX | L   | 0.194      | -            | -                | -                | -         |    -0.40 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            9 |     3555 | 2024-02-05 | Sashi           | L   | 0.152      | -            | -                | -                | -         |    -0.20 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            8 |     3598 | 2024-02-03 | Sangal          | W   | 0.140      | 0.358        | 0.231 (0.012)    | 0.853 (0.043)    | 0 (0.000) |     4.25 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            7 |     3705 | 2024-01-30 | Endpoint        | L   | 0.113      | -            | -                | -                | -         |    -0.47 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            6 |     3708 | 2024-01-30 | ex-Preasy       | L   | 0.111      | -            | -                | -                | -         |    -0.60 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            5 |     3755 | 2024-01-26 | ALTERNATE aTTaX | L   | 0.085      | -            | -                | -                | -         |    -0.17 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            4 |     3904 | 2024-01-20 | ex-sYnck        | L   | 0.046      | -            | -                | -                | -         |    -0.87 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            3 |     3946 | 2024-01-19 | EYEBALLERS      | W   | 0.041      | 0.143        | 0.009 (0.000)    | 0.646 (0.004)    | 0 (0.000) |     1.13 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            2 |     3998 | 2024-01-18 | Spirit          | L   | 0.034      | -            | -                | -                | -         |     0.00 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            1 |     4018 | 2024-01-18 | ex-Preasy       | L   | 0.033      | -            | -                | -                | -         |    -0.18 | c0llins, Marix, mwlky, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
