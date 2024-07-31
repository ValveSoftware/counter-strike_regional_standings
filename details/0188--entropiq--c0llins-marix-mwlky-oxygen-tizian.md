### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Global Rank: [188](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [120]( ../standings_europe.md)<br />
<br />
Final Rank Value:  572.2<br />
<br />
Final Rank Value (572.2) = Starting Rank Value (551.4) + Head To Head Adjustments (20.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 551.4
- 400 + ( ( 0.073 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 551.4


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
|           16 |     3389 | 2024-03-15 | MOUZ NXT        | L   | 0.278      | -            | -                | -                | -         |    -0.57 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           15 |     3426 | 2024-03-14 | ex-Preasy       | L   | 0.271      | -            | -                | -                | -         |    -1.74 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           14 |     3515 | 2024-03-11 | ECLOT           | W   | 0.250      | 0.371        | 0.065 (0.006)    | 0.502 (0.047)    | 0 (0.000) |     7.53 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           13 |     3532 | 2024-03-10 | ALTERNATE aTTaX | W   | 0.245      | 0.371        | 0.032 (0.003)    | 0.564 (0.051)    | 0 (0.000) |     7.09 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           12 |     3561 | 2024-03-09 | Alliance        | L   | 0.238      | -            | -                | -                | -         |    -1.21 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           11 |     3576 | 2024-03-08 | Passion UA      | L   | 0.232      | -            | -                | -                | -         |    -0.37 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           10 |     3677 | 2024-03-05 | 500             | L   | 0.211      | -            | -                | -                | -         |    -1.96 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            9 |     3694 | 2024-03-04 | Sashi           | W   | 0.204      | 0.371        | 0.187 (0.014)    | 0.973 (0.074)    | 0 (0.000) |     6.21 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            8 |     3823 | 2024-02-26 | 9INE            | W   | 0.158      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.14 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            7 |     3844 | 2024-02-25 | Secret          | W   | 0.152      | 0.358        | 0.000 (0.000)    | 0.061 (0.003)    | 0 (0.000) |     2.31 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            6 |     3894 | 2024-02-23 | Sampi           | L   | 0.137      | -            | -                | -                | -         |    -0.56 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            5 |     3939 | 2024-02-21 | MOUZ NXT        | L   | 0.124      | -            | -                | -                | -         |    -0.23 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            4 |     4026 | 2024-02-17 | The Chosen Few  | W   | 0.100      | 0.358        | 0.001 (0.000)    | 0.047 (0.002)    | 0 (0.000) |     2.11 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            3 |     4176 | 2024-02-11 | ALTERNATE aTTaX | L   | 0.060      | -            | -                | -                | -         |    -0.14 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            2 |     4249 | 2024-02-05 | Sashi           | L   | 0.018      | -            | -                | -                | -         |    -0.02 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            1 |     4292 | 2024-02-03 | Sangal          | W   | 0.006      | 0.358        | 0.221 (0.000)    | 0.824 (0.002)    | 0 (0.000) |     0.17 | c0llins, Marix, mwlky, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
