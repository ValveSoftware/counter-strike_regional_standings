### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Global Rank: [193](../../standings_global_2024_08_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_06.md)<br />
Regional Rank: [122]( ../../standings_europe_2024_08_06.md)<br />
<br />
Final Rank Value:  563.3<br />
<br />
Final Rank Value (563.3) = Starting Rank Value (546.7) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 546.7
- 400 + ( ( 0.071 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 546.7


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
|           14 |     3597 | 2024-03-15 | MOUZ NXT        | L   | 0.239      | -            | -                | -                | -         |    -0.48 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           13 |     3634 | 2024-03-14 | ex-Preasy       | L   | 0.231      | -            | -                | -                | -         |    -1.58 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           12 |     3723 | 2024-03-11 | ECLOT           | W   | 0.211      | 0.371        | 0.086 (0.007)    | 0.537 (0.042)    | 0 (0.000) |     6.55 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           11 |     3740 | 2024-03-10 | ALTERNATE aTTaX | W   | 0.206      | 0.371        | 0.031 (0.002)    | 0.537 (0.041)    | 0 (0.000) |     5.95 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           10 |     3769 | 2024-03-09 | Alliance        | L   | 0.199      | -            | -                | -                | -         |    -0.98 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            9 |     3784 | 2024-03-08 | Passion UA      | L   | 0.193      | -            | -                | -                | -         |    -0.28 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            8 |     3885 | 2024-03-05 | 500             | L   | 0.172      | -            | -                | -                | -         |    -1.60 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            7 |     3902 | 2024-03-04 | Sashi           | W   | 0.165      | 0.371        | 0.184 (0.011)    | 0.958 (0.058)    | 0 (0.000) |     5.02 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            6 |     4031 | 2024-02-26 | 9INE            | W   | 0.119      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.64 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            5 |     4052 | 2024-02-25 | Secret          | W   | 0.112      | 0.358        | 0.000 (0.000)    | 0.055 (0.002)    | 0 (0.000) |     1.73 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            4 |     4102 | 2024-02-23 | Sampi           | L   | 0.098      | -            | -                | -                | -         |    -0.40 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            3 |     4147 | 2024-02-21 | MOUZ NXT        | L   | 0.085      | -            | -                | -                | -         |    -0.15 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            2 |     4234 | 2024-02-17 | The Chosen Few  | W   | 0.061      | 0.358        | 0.001 (0.000)    | 0.038 (0.001)    | 0 (0.000) |     1.28 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            1 |     4384 | 2024-02-11 | ALTERNATE aTTaX | L   | 0.021      | -            | -                | -                | -         |    -0.05 | c0llins, Marix, mwlky, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
