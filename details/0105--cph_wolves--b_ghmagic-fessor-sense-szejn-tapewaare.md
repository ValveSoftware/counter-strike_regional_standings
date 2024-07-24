### Roster Details<br />
Team Name: CPH Wolves<br />
Roster: BøghmagiC, Fessor, sense, szejn, Tapewaare<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [105](../standings_global.md)<br />
Regional Rank: [76]( ../standings_europe.md)<br />
Final Rank Value:  868.5<br />
<br />
Final Rank Value (868.5) = Starting Rank Value (780.6) + Head To Head Adjustments (87.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.346[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 780.6
- 400 + ( ( 0.188 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 780.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       11 | 2024-07-24 | Space            | W   | 1.000      | 0.435        | 0.007 (0.003)    | 0.452 (0.197)    | 0 (0.000) |    19.01 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           18 |       40 | 2024-07-23 | Sampi            | L   | 1.000      | -            | -                | -                | -         |   -13.65 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           17 |       61 | 2024-07-22 | TSM              | W   | 1.000      | 0.143        | 0.047 (0.007)    | 0.326 (0.047)    | 0 (0.000) |    21.33 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           16 |       72 | 2024-07-22 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |   -11.15 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           15 |      117 | 2024-07-20 | INFINITE         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.156 (0.022)    | 0 (0.000) |     6.12 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           14 |      126 | 2024-07-20 | Space            | L   | 1.000      | -            | -                | -                | -         |   -12.09 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           13 |      161 | 2024-07-19 | Heimo            | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.095 (0.014)    | 0 (0.000) |     7.67 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           12 |      237 | 2024-07-18 | Passion UA       | W   | 1.000      | 0.435        | 0.163 (0.071)    | 1.000 (0.435)    | 0 (0.000) |    23.02 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           11 |      342 | 2024-07-16 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -14.42 | BøghmagiC, Fessor, sense, shadiy, Tapewaare |
|           10 |      398 | 2024-07-15 | GUN5             | W   | 1.000      | 0.435        | 0.093 (0.040)    | 0.489 (0.213)    | 0 (0.000) |    22.15 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|            9 |      614 | 2024-06-16 | 777              | W   | 0.945      | 0.143        | 0.020 (0.003)    | 0.208 (0.028)    | 0 (0.000) |    11.57 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ   |
|            8 |      682 | 2024-06-14 | FLuffy Gangsters | W   | 0.933      | 0.143        | -                | 0.235 (0.031)    | 0 (0.000) |     7.08 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ   |
|            7 |      723 | 2024-06-13 | INFINITE         | W   | 0.926      | 0.143        | -                | 0.156 (0.021)    | 0 (0.000) |     5.98 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ   |
|            6 |      742 | 2024-06-12 | Sashi            | L   | 0.920      | -            | -                | -                | -         |    -2.60 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ   |
|            5 |      748 | 2024-06-12 | WOPA             | W   | 0.919      | 0.340        | 0.002 (0.001)    | 0.143 (0.045)    | 0 (0.000) |     7.89 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ   |
|            4 |     1586 | 2024-05-18 | VP.Prodigy       | L   | 0.752      | -            | -                | -                | -         |    -9.04 | Basso, BøghmagiC, Fessor, szejn, vigg0      |
|            3 |     1612 | 2024-05-17 | MASONIC          | W   | 0.746      | 0.143        | 0.012 (0.001)    | -                | -         |    12.16 | Basso, BøghmagiC, Fessor, szejn, vigg0      |
|            2 |     1648 | 2024-05-16 | Rhyno            | L   | 0.740      | -            | -                | -                | -         |    -5.25 | Basso, BøghmagiC, Fessor, szejn, vigg0      |
|            1 |     1705 | 2024-05-15 | MASONIC          | W   | 0.732      | 0.143        | 0.012 (0.001)    | -                | -         |    12.07 | Basso, BøghmagiC, Fessor, szejn, vigg0      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,325.69)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
