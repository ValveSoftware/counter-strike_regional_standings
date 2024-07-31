### Roster Details<br />
Team Name: CPH Wolves<br />
Roster: BøghmagiC, Fessor, sense, szejn, Tapewaare<br />
Global Rank: [111](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [83]( ../standings_europe.md)<br />
<br />
Final Rank Value:  837.9<br />
<br />
Final Rank Value (837.9) = Starting Rank Value (781.2) + Head To Head Adjustments (56.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.103[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.2
- 400 + ( ( 0.185 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 781.2


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
|           22 |       51 | 2024-07-30 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -6.41 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           21 |      120 | 2024-07-28 | Sampi            | L   | 1.000      | -            | -                | -                | -         |   -12.99 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           20 |      145 | 2024-07-27 | 1WIN             | L   | 1.000      | -            | -                | -                | -         |   -11.32 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           19 |      253 | 2024-07-24 | Space            | W   | 1.000      | 0.435        | 0.006 (0.003)    | 0.406 (0.176)    | 0 (0.000) |    18.60 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           18 |      282 | 2024-07-23 | Sampi            | L   | 1.000      | -            | -                | -                | -         |   -13.80 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           17 |      303 | 2024-07-22 | TSM              | W   | 1.000      | 0.143        | 0.039 (0.006)    | 0.345 (0.049)    | 0 (0.000) |    22.42 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           16 |      314 | 2024-07-22 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |   -10.72 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           15 |      359 | 2024-07-20 | INFINITE         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.183 (0.026)    | 0 (0.000) |     6.19 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           14 |      368 | 2024-07-20 | Space            | L   | 1.000      | -            | -                | -                | -         |   -12.48 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           13 |      403 | 2024-07-19 | Heimo            | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.086 (0.012)    | 0 (0.000) |     7.64 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           12 |      479 | 2024-07-18 | Passion UA       | W   | 1.000      | 0.435        | 0.172 (0.075)    | 1.000 (0.435)    | 0 (0.000) |    23.26 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|           11 |      584 | 2024-07-16 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -12.35 | BøghmagiC, Fessor, sense, shadiy, Tapewaare |
|           10 |      640 | 2024-07-15 | GUN5             | W   | 1.000      | 0.435        | 0.074 (0.032)    | 0.516 (0.224)    | 0 (0.000) |    22.12 | BøghmagiC, Fessor, sense, szejn, Tapewaare  |
|            9 |      856 | 2024-06-16 | 777              | W   | 0.898      | 0.143        | 0.016 (0.002)    | 0.183 (0.023)    | 0 (0.000) |    10.89 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ   |
|            8 |      924 | 2024-06-14 | FLuffy Gangsters | W   | 0.885      | 0.143        | -                | 0.218 (0.028)    | 0 (0.000) |     6.68 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ   |
|            7 |      965 | 2024-06-13 | INFINITE         | W   | 0.878      | 0.143        | -                | 0.183 (0.023)    | 0 (0.000) |     5.77 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ   |
|            6 |      984 | 2024-06-12 | Sashi            | L   | 0.873      | -            | -                | -                | -         |    -2.45 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ   |
|            5 |      990 | 2024-06-12 | WOPA             | W   | 0.872      | 0.340        | 0.001 (0.000)    | 0.127 (0.038)    | 0 (0.000) |     7.50 | BøghmagiC, Fessor, szejn, Tapewaare, tOPZ   |
|            4 |     1828 | 2024-05-18 | VP.Prodigy       | L   | 0.705      | -            | -                | -                | -         |    -8.32 | Basso, BøghmagiC, Fessor, szejn, vigg0      |
|            3 |     1854 | 2024-05-17 | MASONIC          | W   | 0.699      | 0.143        | 0.009 (0.001)    | -                | -         |    11.00 | Basso, BøghmagiC, Fessor, szejn, vigg0      |
|            2 |     1890 | 2024-05-16 | Rhyno            | L   | 0.692      | -            | -                | -                | -         |    -5.34 | Basso, BøghmagiC, Fessor, szejn, vigg0      |
|            1 |     1947 | 2024-05-15 | MASONIC          | W   | 0.685      | 0.143        | 0.009 (0.001)    | -                | -         |    10.86 | Basso, BøghmagiC, Fessor, szejn, vigg0      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,257.55)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
